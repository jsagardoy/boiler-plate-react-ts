import * as React from 'react';
import ReactDOM from 'react-dom';
import { ClientsContainerComponent } from 'layout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from 'scenes/app';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/clients' component={ClientsContainerComponent} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
