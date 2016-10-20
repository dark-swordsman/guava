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
      fahrenheit: '',
      celcius: '',
      result: 'Welcome. Start by entering a value.',
    };
  }

  handleFahrenheitChange(e) {
    this.setState({fahrenheit: e.target.value});
    if (this.state.celcius !== ''){
      this.setState({celcius: ''})
    }
  }

  handleCelciusChange(e) {
    this.setState({celcius: e.target.value});
    if (this.state.fahrenheit !== ''){
      this.setState({fahrenheit: ''})
    }
  }

  handleCalculate() {
    if ((this.state.fahrenheit !== '') && (this.state.celcius === '')) {
      this.setState({result: ((this.state.fahrenheit - 32)/1.8) + " ºC"});
    } else if ((this.state.fahrenheit === '') && (this.state.celcius !== '')){
      this.setState({result: ((this.state.celcius * 1.8) + 32) + " ºF"});
    } else if ((this.state.fahrenheit === '') && (this.state.celcius === '')){
      this.setState({result: "Please Input a Number"});
    } else if ((this.state.fahrenheit !== '') && (this.state.celcius !== '')) {
      this.setState({result: "Please Input only Celcius or Fahrenheit"});
    }
  }

  handleClear() {
    this.setState({
      celcius: '',
      fahrenheit: '',
      result: 'Cleared!'
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
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>ºC</InputGroup.Addon>
                  <FormControl type="number" name="celcius" value={this.state.celcius} onChange={this.handleCelciusChange.bind(this)}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>ºF</InputGroup.Addon>
                  <FormControl type="number" name="fahrenheit" value={this.state.fahrenheit} onChange={this.handleFahrenheitChange.bind(this)}/>
                </InputGroup>
              </FormGroup>
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
