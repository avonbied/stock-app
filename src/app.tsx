import React from 'react';

import StockForm from './components/stockForm';

import './app.css';

export default function App() {
  return (
    <main>
      <StockForm id="test" />
      <canvas width="32" height="32"></canvas>
    </main>
  );
}