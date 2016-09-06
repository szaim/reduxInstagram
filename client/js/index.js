import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
   <h1>I am react</h1>
  , document.getElementById('app'));
