import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import WhoYouWannaFind from "./WhoYouWannaFind.js";

// API call to HP api to get characters and store in state
// Get user selection and store in state
// Filter list of all characters down to selected group
// Filter THOSE characters down to the SPIES and save to state
// Print those dicks to the page

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      userSelection: "",
      deathEaters: []
    };
  };

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.userSelection !== prevState.userSelection) {
    // };
  };

  updateCharacters = (event, userSelection) => {
    event.preventDefault();
    
    axios({
      url: "https://www.potterapi.com/v1/characters",
      params: {
        key: "$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy",
        [userSelection]: true
      }
    }).then(response => {
      const characters = response.data;

      const deathEaters = characters.filter(character => character.deathEater);

      this.setState({
        characters,
        deathEaters
      });
    });
  };

  render() {
    return (
      <div className="App">
        <WhoYouWannaFind updateCharacters={this.updateCharacters} />
        <ul>
          {this.state.characters.map(character => {
            return (
              <li key={character._id}>{character.name}</li>
            );
          })}
        </ul>
      </div>
    );
  };
};

export default App;
