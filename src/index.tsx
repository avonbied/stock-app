import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import App from './app';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);