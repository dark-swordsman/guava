import React, { Component } from 'react';

import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';

import Layout from './components/Layout';
import Pages from './pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Pages.Home} />
            <Route path="/list" component={Pages.List} />
            <Route path="/temperature" component={Pages.Temperature} />
            <Route path="/slope" component={Pages.Slope} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
