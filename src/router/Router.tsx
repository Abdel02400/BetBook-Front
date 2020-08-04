import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../template/notfound/NotFound';

const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact />
      <Route path="/login" exact />
      <Route
        path="/"
        component={NotFound}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
