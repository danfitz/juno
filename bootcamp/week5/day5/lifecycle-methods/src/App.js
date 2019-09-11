// Import react from node_modules
import React, { Component } from 'react';
// Import axios for API calls from node_modules
import axios from "axios";
// Import css file
import './App.css';
import ArtPiece from "./ArtPiece.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      artArray: []
    }
  }

  componentDidMount() {
    axios({
      url: "https://www.rijksmuseum.nl/api/en/collection",
      method: "GET",
      responseType: "json",
      params: {
        key: "VeM17szh",
        q: "van gogh",
        format: "json",
        imgonly: true
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
        <h1>Art Again: React Edition</h1>
        <p>COUNT: {this.state.counter}</p>
        <button onClick={this.handleClick}>CLICK ME</button>
        <br />
        {this.state.artArray.length ? this.state.artArray.map(piece => {
          return (
            <ArtPiece key={piece.id} piece={piece} />
          );
        }) : "Page loading..." }
      </div>
    );
  }
}

export default App;
