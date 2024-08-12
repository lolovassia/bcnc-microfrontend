import ReactDOM from 'react-dom/client';

import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';
import Container from '@/components/Container';

import './index.css';

const App = () => (
  <Container>
    <Card onClick={() => null}>Hola</Card>
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  </Container>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
