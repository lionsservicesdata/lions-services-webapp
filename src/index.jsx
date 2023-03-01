import { Provider } from 'react-redux';
import { Store } from "./Store/Store";
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

ReactDOM.render (
  <React.StrictMode>
    <Provider store={Store}>
      <App />
		</Provider>
  </React.StrictMode>,
	
  document.getElementById('root')
);