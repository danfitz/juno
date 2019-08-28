import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import MoodIcon from "@material-ui/icons/Mood";
import './App.css';

// function WelcomeBanner(props) {
//   return (
//     <header>
//       <h1>Home of {props.name}</h1>
//     </header>
//   );
// }

// class WelcomeBanner extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
//   render() {
//     return (
//       <header>
//         <h1>Home of {this.props.name}</h1>
//       </header>
//     )
//   }
// }

// class FeaturedDonut extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>The featured donut of the day is: {this.props.donut}</h1>
//     )
//   }
// }

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//       <h2>{ props.message ? props.message : "NO MESSAGE" }</h2>
//     </header>
//   );
// }

// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: ["Shoehorn", "Headphones"]
//     }
//   }

//   showProducts() {
//     const products = this.state.products.map(product =>
//       <p>{product}</p>
//     )

//     return products;
//   }

//   showLoadingState() {
//     return (
//       <p>Loading...</p>
//     )
//   }

//   render() {
//     return (
//       <div>{this.state.products.length ? this.showProducts() : this.showLoadingState() }</div>
//     )
//   }
// }

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("I WAS CONSTRUCTED");
  }

  componentDidMount() {
    console.log("I MOUNTED");
  }

  render() {
    return (
      <p>Hello world</p>
    )
  }
}

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  componentDidUpdate(prevState, curState) {
    { prevState.inputValue !== this.state.inputValue ? console.log("DIFF") : console.log("SAME") };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        </label>
        <p>{this.state.inputValue}</p>
      </form>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MyForm />
        <Button color="primary" variant="contained">
          Click Me <MoodIcon />
        </Button>
      </div>
    );
  }
}

export default App;
