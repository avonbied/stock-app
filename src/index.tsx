import React from 'react';
import ReactDOM from 'react-dom';

import StockForm from './components/stockForm';

import './index.css';

const App = () => (<h1>React + TypeScript! {new Date().toLocaleDateString()}</h1>);
  
ReactDOM.render(
	<React.StrictMode>
		<App />
		<StockForm id="test" />
	</React.StrictMode>,
	document.getElementById("root")
);