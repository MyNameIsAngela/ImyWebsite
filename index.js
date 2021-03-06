import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './app/App/index'
import Home from './app/Home'
import './index.scss'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/app" component={App} />
  </Router>
), document.getElementById('root'))