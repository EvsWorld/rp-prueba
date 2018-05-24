import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config()

ReactDOM.render(
  <Router>
    <div>
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);
