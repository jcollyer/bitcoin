import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app'
import Bitcoins from './components/bitcoins'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Bitcoins} />
    </Route>
  </Router>
);
