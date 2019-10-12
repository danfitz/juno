import React, { Component } from 'react';

// Component to get user selection of wizard group:
//  1. User selects cauldron from dropdown list
//  2. On submit, user selection is passed up to App.js through a method in props
//  3. 

class WhoYouWannaFind extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: "ministryOfMagic"
    };
  };

  handleChange = event => {
    const userSelection = event.target.value;

    this.setState({
      userSelection
    });
  };

  render() {
    return (
      <form action="" onSubmit={(event) => this.props.updateCharacters(event, this.state.userSelection)}>
        <select name="cauldron" id="cauldron" onChange={this.handleChange}>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="orderOfThePhoenix">Order of the Phoenix</option>
          <option value="dumbledoresArmy">Dumbledore's Army</option>
        </select>

        <input type="submit" value="Search" />
      </form>
    );
  };
};

export default WhoYouWannaFind;