// Import react from node_modules
import React, { Component } from 'react';
// Import axios for API calls from node_modules
import axios from "axios";
// Import css file
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      artArray: []
    }
    console.log("Hello from the constructor");
  }

  componentDidMount() {
    console.log("Hello from componentDidMount");
    axios({
      url: "https://www.rijksmuseum.nl/api/en/collection",
      method: "GET",
      responseType: "json",
      params: {
        key: "VeM17szh",
        q: "van gogh",
        format: "json",
        imgonly: "true"
      }
    }).then((response) => {
      this.setState({
        artArray: response.data.artObjects,
        artName: response.data.artObjects[0].title
      })
    })
  }

  componentDidUpdate() {
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Lifecycle Methods</h1>
        <p>COUNT: {this.state.counter}</p>
        <button onClick={this.handleClick}>CLICK ME</button>
        <br />
        {this.state.artArray.length ? this.state.artArray.map(piece => {
          return (
            <div key={piece.id}>
              <h2>{piece.title}</h2>
              <img src={piece.webImage.url} alt=""/>
            </div>
          );
        }) : "Page loading..." }
      </div>
    );
  }
}

export default App;
