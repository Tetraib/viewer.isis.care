import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from './App.jsx';
import About from './About.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
);
