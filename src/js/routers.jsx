import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';

const HomeContainer = Loadable({
  loader: () => import('./pages/home-container.jsx'),
  loading: () => null
});

const PageNoFound = () => (
  <div>
    {'Page No Found'}
  </div>
);

export default class Routers extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route path="/404" component={PageNoFound} />
          <Redirect exact path="/" to="/home" />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    );
  }
}