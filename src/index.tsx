import * as React from 'react';
import ReactDOM from 'react-dom';
import { ClientsContainerComponent } from 'layout';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { App } from 'scenes/app';
import { ClientDetailComponent } from 'pods/clients';
import { LoginComponent, logoutHandlerComponent } from 'common/login';
import { getSessionCookie } from 'common/cookies';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(getSessionCookie());
  return (
    <Route
      {...rest}
      render={(props) =>
        getSessionCookie() !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const routing = (
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginComponent} />
      <PrivateRoute exact path='/' component={App} />
      <PrivateRoute
        exact
        path='/clients'
        component={ClientsContainerComponent}
      />
      <PrivateRoute exact path='/logout' component={logoutHandlerComponent} />
      <PrivateRoute
        path='/client/:clientId'
        component={ClientDetailComponent}
      />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
