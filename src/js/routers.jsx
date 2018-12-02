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

const Signup = Loadable({
  loader: () => import('./users/signup.jsx'),
  loading: () => null
});

const Signin = Loadable({
  loader: () => import('./users/signin.jsx'),
  loading: () => null
});

const ResetPassword = Loadable({
  loader: () => import('./users/reset-password.jsx'),
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
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Signin} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/404" component={PageNoFound} />
          <Redirect exact path="/" to="/home" />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    );
  }
}