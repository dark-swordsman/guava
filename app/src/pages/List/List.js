import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      activeKeyAssignment: 1,
    };
  }

  render() {
    const setDefault = (itemId) => {
      if (this.state.activeKey === 0) {
        this.setState({ activeKey: itemId });
      } else if (this.state.activeKey === itemId){
        this.setState({ activeKey: 0 });
      } else if (this.state.activeKey !== itemId) {
        this.setState({ activeKey: itemId });
      }
    }

    const title = (titleId) => {
      switch (titleId) {
        case 1: return(<span>Temperature</span>)
        break;
        default: return(<span>No Data</span>)
      }
    }

    const description = (descId) => {
      switch (descId) {
        case 1: return(<span>Calculate in F, C, or K!</span>)
        break;
        default: return(<span>No Data</span>)
      }
    }

    const link = (linkId) => {
      switch (linkId) {
        case 1: return('/temperature')
        break;
        default: return('/')
      }
    }

    const listing = (itemId) => {
      return (
        <div>
          <ListGroupItem onClick={ () => setDefault(itemId) }>
            {title(itemId)}
          </ListGroupItem>
          <Panel collapsible expanded={this.state.activeKey === itemId}>
            <div className="panelPadding">
              {description(itemId)}
            </div>
            <LinkContainer to={link(itemId)}>
              <Button bsStyle="primary">Go!</Button>
            </LinkContainer>
          </Panel>
        </div>
      );
    }

    return (
      <div>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={6}>
            <ListGroup>
              {listing(1)}
            </ListGroup>
          </Col>
          <Col sm={3}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default List;
