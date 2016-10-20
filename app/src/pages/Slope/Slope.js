import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xOne: '',
      xTwo: '',
      yOne: '',
      yTwo: '',
      result: 'Welcome. Start by entering a value.',
    };
  }

  handleXOneChange(e) {
    this.setState({xOne: e.target.value});
  }

  handleXTwoChange(e) {
    this.setState({xTwo: e.target.value});
  }

  handleYOneChange(e) {
    this.setState({yOne: e.target.value});
  }

  handleYTwoChange(e) {
    this.setState({yTwo: e.target.value});
  }

  handleCalculate() {
    if((this.state.xTwo - this.state.xOne) !== 0) {
      this.setState({result: ((this.state.yTwo - this.state.yOne) / (this.state.xTwo - this.state.xOne))});
    } else if ((this.state.xTwo - this.state.xOne) === 0) {
      this.setState({result: "Error, cannot divide by zero"});
    }
  }

  handleClear() {
    this.setState({
      xOne: '',
      xTwo: '',
      yOne: '',
      yTwo: '',
      result: 'Cleared!',
    });
  }

  render() {
    const displayResult = () => {
      if (this.state.result !== '') {
        return (
          <span>{this.state.result}</span>
        );
      }
    }

    return (
      <div>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={3}>
            <Panel className="panelShow">
              {displayResult()}
            </Panel>
          </Col>
          <Col sm={5}>
            <form>
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>Y₂</InputGroup.Addon>
                      <FormControl type="number" name="yTwo" value={this.state.yTwo} onChange={this.handleYTwoChange.bind(this)}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>X₂</InputGroup.Addon>
                      <FormControl type="number" name="xTwo" value={this.state.xTwo} onChange={this.handleXTwoChange.bind(this)}/>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>Y₁</InputGroup.Addon>
                      <FormControl type="number" name="yOne" value={this.state.yOne} onChange={this.handleYOneChange.bind(this)}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>X₁</InputGroup.Addon>
                      <FormControl type="number" name="xOne" value={this.state.xOne} onChange={this.handleXOneChange.bind(this)}/>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <Button onClick={this.handleCalculate.bind(this)}>
                Calculate
              </Button>
              <Button className="pull-right" onClick={this.handleClear.bind(this)}>
                Clear
              </Button>
            </form>
          </Col>
          <Col sm={2}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Temperature;
