import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App1 />
  </BrowserRouter>
);
