import React, { Component } from 'react';
import './App.css';
import PetList from "./PetList";

class App extends Component {
  render() {
    return (
      <main>
        <h1>Adopt Us!!</h1>
        <PetList />
      </main>
    );
  }
}

export default App;