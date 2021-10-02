import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import style from './scss/custom.scss';
import './stylesheets/main.css';

const element = <App/>
const root = document.getElementById('root');


ReactDOM.render(element, root);