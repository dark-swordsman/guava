import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to guava!</h1>
          <div className="jumbotronOne">
            <p>guava lets you do all sorts of complex math with ease.</p>
            <LinkContainer to={{ pathname: '/list' }}>
              <Button bsStyle="primary" bsSize="large">Get Started</Button>
            </LinkContainer>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
