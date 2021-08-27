import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const element = <App/>
const root = document.getElementById('root');

ReactDOM.render(element, root);