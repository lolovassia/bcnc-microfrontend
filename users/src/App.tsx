import ReactDOM from 'react-dom/client';

import React from 'react';

import './index.css';
import UserPage from './pages/UserPage';

const App = () => (
  <div>
    <UserPage />
  </div>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
