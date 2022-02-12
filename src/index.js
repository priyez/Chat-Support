import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SupportAdmin from './SupportChatAdmin/index'
import reportWebVitals from './reportWebVitals';

const path = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
  { path.indexOf('/admin') === -1 ? <App /> : <SupportAdmin /> }
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
