import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { path } from './route.utils';
import NotFound from '../template/notfound/NotFound';

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path={path('signup')} exact />
      <Route path={path('login')} exact />
      <Route
        path="/"
        component={NotFound}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
