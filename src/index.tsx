import * as React from 'react';
import ReactDOM from 'react-dom';
import { ClientsContainerComponent } from 'layout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from 'scenes/app';
import { ClientDetailComponent } from 'pods/clients';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/clients' component={ClientsContainerComponent} />
      <Route path='/client/:clientId'>
        <ClientDetailComponent />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
