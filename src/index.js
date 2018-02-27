import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import App from './App';

window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


ReactDOM.render(<App />, document.getElementById('root'));
