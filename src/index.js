import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  CircleContextProvider from './context/CirclesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CircleContextProvider>
      <App />
    </CircleContextProvider>
  </React.StrictMode>
);


