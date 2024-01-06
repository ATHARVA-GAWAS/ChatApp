// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.tsx';  // Ensure the path is correct
import ChatBox from './components/ChatBox';  // Ensure the path is correct
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
