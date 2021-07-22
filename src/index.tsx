import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
