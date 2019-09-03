import React, { Component } from 'react';
import './App.scss';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>I'm NOT a header!</p>
        <Footer />
      </div>
    );
  }
}

export default App;
