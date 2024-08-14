const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssNanoPlugin = require('cssnano-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = () => ({
  output: {
    publicPath: 'http://localhost:3002/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, 'src')],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'albums',
      filename: 'remoteEntry.js',
      remotes: {
        components: 'components@http://localhost:3004/remoteEntry.js',
      },
      exposes: {
        './AlbumPage': './src/pages/AlbumPage.tsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssNanoPlugin(),
    ],
  },
});
