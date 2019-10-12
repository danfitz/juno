import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Dog(props) {
  return (
    <h2>Hi, I'm {props.match.params.name}! Woof woof!</h2>
  );
};

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Heeeyyyyy</p>
      <Link to="/about/Trixie">Trixie</Link>
    </div>
  );
};

function Home() {
  return (
    <div className="home">
      <h2>Homeeeeee</h2>
      <p>Hiiiiiii</p>
    </div>
  );
};

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>

            <h1>React Router</h1>

            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/about/:name" render={(params) => <Dog {...params} />} />
          </div>
        </Router>
    );
  };
};

export default App;
