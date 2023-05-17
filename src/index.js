import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from "./App.js";

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
  
  // <React.StrictMode>
  //   <BrowserRouter basename={process.env.PUBLIC_URL}>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
);