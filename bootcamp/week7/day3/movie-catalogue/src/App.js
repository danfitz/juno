import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalogue from "./Catalogue.js";
import MovieDetails from "./MovieDetails.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="top-header">
            <h1>Hackflix</h1>
            <nav>
              <p><Link to="/">Catalogue</Link></p>
            </nav>
          </header>
          <Route exact path="/" component={Catalogue} />
          <Route path="/movie/:movieId" component={MovieDetails} />
        </div>
      </Router>
    );
  };
}

export default App;
