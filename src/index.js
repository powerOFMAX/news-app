import React from 'react';
import { hydrate } from 'react-dom';
import App from './components';
/*
 Styles loaded from http://especiales.lanacion.com.ar/arc-css/css/site.css
 to bring a better user experience.
 */

// import './site.css';

hydrate(
  <App />, document.getElementById('root'),
);
