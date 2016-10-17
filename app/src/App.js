import React, { Component } from 'react';

import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';

import Pages from './pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute component={Pages.Home} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
