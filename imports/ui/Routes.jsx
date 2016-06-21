import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from './App.jsx';
import Grid from './Grid.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/grid" component={Grid}/>
    </Route>
  </Router>
);
