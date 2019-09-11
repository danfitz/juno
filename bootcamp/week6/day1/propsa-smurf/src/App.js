import React, { Component } from 'react';
import './App.css';
import FeaturedPark from "./FeaturedPark.js";
import AuthorDetails from "./AuthorDetails.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredParks: ["Sunnybrook", "Trinity Bellwoods", "Cherry Beach"],
      author: {
        name: "Margaret Atwood",
        location: {
          city: "Toronto",
          province: "Ontario"
        }
      }
    };
  };

  removePark = (index) => {
    const newParks = [...this.state.featuredParks];
    newParks.splice(index, 1);
    
    this.setState({
      featuredParks: newParks
    });
  }

  render() {
    return (
      <div className="App">
        <AuthorDetails author={this.state.author} />
        {
          this.state.featuredParks.map((featuredPark, index) => {
            return (
              <FeaturedPark
                key={index}
                name={featuredPark}
                removePark={() => this.removePark(index)}
              />
            );
          })
        }
      </div>
    );
  };
};

export default App;