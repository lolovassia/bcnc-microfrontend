import ReactDOM from 'react-dom/client';

import React from 'react';

import BasicCard from '@/components/Card';

import './index.css';

const App = () => (
  <div>
    <BasicCard onClick={() => null}>Hola</BasicCard>
  </div>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
