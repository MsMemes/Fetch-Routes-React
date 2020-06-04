import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Profile from './Profile';
import NoRouteMatch from './NoRouteMatch';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home-page" component={Home} />
      <Route exact path="/profile-page" component={Profile} />
      <Route component={NoRouteMatch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


