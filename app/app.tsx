import React from 'react';
import CanvasJSReact from './assets/vendor/canvasjs.stock.react';

import StockForm from './components/stockForm';
import './app.css';

const {CanvasJS, CanvasJSStockChart} = CanvasJSReact;

export default function App() {
  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "Apple",  y: 10  },
                  { label: "Orange", y: 15  },
                  { label: "Banana", y: 25  },
                  { label: "Mango",  y: 30  },
                  { label: "Grape",  y: 28  }
              ]
     }]
 }
  return (
    <main>
      <StockForm id="test" />
      <canvas width="32" height="32"></canvas>
      <CanvasJSStockChart options={options} />
    </main>
  );
}