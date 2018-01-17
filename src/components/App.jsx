import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLayout from './PageLayout/PageLayout';
import Home from '../pages/Home';

const App = () => (
  <BrowserRouter>
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </PageLayout>
  </BrowserRouter>
);

export default App;
