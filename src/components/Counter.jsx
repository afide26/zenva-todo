import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends Component {
  state = { counter: 0 }

  handleButtonClick = () => {
    let counter = this.state.counter;

    this.setState(() => {
      return ({
        counter: counter += 1
      })
    })
  }
  render() {
    return (
      <Button id="counter" color="red" floated="right" compact size="small" onClick={this.handleButtonClick}>
        You have clicked this counter {this.state.counter} times!
      </Button>
    );
  }
}

export default Counter;