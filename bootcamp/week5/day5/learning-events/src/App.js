import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      visitors: 0
    }
  }

  handleClick = () => {
    console.log(this);
    // this.setState({ visitors: this.state.visitors + 1 });
  }

  render() {
    return (
      <div className="App">
        <p>I am currently on number: {this.state.visitors}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default App;