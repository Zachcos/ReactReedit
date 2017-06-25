import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Home from 'Home';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
