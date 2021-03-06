import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ActionCableProvider } from 'react-actioncable-provider';

ReactDOM.render(
  // <ActionCableProvider url={'ws://localhost:3000/cable'}>
   <ActionCableProvider url={'wss://friendsinaction.herokuapp.com/cable'}>
      <App />
    </ActionCableProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
