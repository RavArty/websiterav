import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'tachyons';

import './assets/scss/blk-design-system-react.scss'
import './assets/css/nucleo-icons.css'
import './assets/demo/demo.css'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById('root'));

