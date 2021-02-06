import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const loggin = false;

const Routes: React.FC = () => {
  return (
    <Switch>
      {
        loggin ? (
          <Route path="/" exact component={Dashboard} />
        ) : (
          <Route path="/" exact component={Home} />
        )
        /* <Route
      path="*"
      component={() => <ErrorMessage message="Está página não existe" />}
    /> */
      }
    </Switch>
  );
};

export default Routes;
