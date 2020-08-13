import React from 'react';
import { hydrate } from 'react-dom';
import App from './components';
import './site.css';

hydrate(
  <App />, document.getElementById('root'),
);
