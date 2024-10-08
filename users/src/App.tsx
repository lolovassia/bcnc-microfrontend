import UserPage from '@pages/UserPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import React from 'react';

import './index.css';

const queryClient = new QueryClient();

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <UserPage />
  </QueryClientProvider>,
);
