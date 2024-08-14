module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@axios/(.*)$': '<rootDir>/src/axios/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },
};
