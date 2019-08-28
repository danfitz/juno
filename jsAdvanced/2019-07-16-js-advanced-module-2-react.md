---
categories: [frontend]
tags: [js]
title: "JS Advanced Module 2: React"
source: [juno]
---

## Intro to Frameworks

A framework gives us a model home structure, a way of writing code that we live in when building something.

React is very strong at building **single page applications** or **SPA**. (Aside: Facebook, the creators of React, actually consider React a library, not a framework, but some people disagree.)

**Pro tip**: Learning React will teach you transferrable skills that will work with other frameworks like Vue and Angular.

### Virtual DOM

React's greatest strength is its virtual DOM, which gives us some of these powers and more:
* Identify what areas of a site we should be paying attention to
* Only update those areas when it needs updating

The way React uses the virtual DOM is it changes the virtual DOM first. Then it compares the differences between the real and virtual DOM. If changes are found, it updates the real DOM. And if no changes are found, it does *nothing at all*!

**Benefit**: The naive approach to DOM manipulation re-renders the entire page every time there might be a change. This leads to incredible redundancy.

### More benefits

Main benefits:

1. **Components**: A small modular reusable block of code. Think of them like lego blocks. You can re-use them in many different applications, pulling one out of one project and plugging it into another even. Example components: header components, nav components, etc.!

2. **Templating**: Using a **JSX** syntax very similar to (but not exactly like) HTML, you can create HTML elements with the ability to pop in variables like template literals.

3. **Data binding**: We can plug in variables into our templates! This means more dynamic data!

```js
const name = "Jon Snow";
const element = <h1>Hello, {name}</h1>;
// Templating with JSX
```

4. **Routing**: Instead of refreshing the page and updating information based on the URL, React changes everything on a single page. This means changes are more client side than server side. (React doesn't have a router built in, but [React Router](https://github.com/ReactTraining/react-router) is a current industry standard.)

## Create React App

The Create React App tool by Facebook saves us a ton of headaches because it handles all the dependencies (resources that make the application possible) and bundling of assets for us (converting things like .sass to .css).

### Understanding files in Create React App instance

* `index.js` runs the app.
* `App.js` contains the component for the app that gets run by `index.js`.
* `App.css` and `index.css` provide the styling but split up modularly.
* `node_modules` folder contains all the dependencies installed for us.
* `.gitignore` contains the files and folders to be ignored, including `node_modules`.
* `package.json` tells other users the dependencies for this project, which is referenced when you run `npm install`.

## React Components

As developers, it's best practice to **modularize** your code--to break it down into discrete parts. Each bit of code should perform one thing.

Similarly, each React component should perform one thing.

There are 2 types of components:
1. Function  components
2. Class components

### Function components

They're basically functions that, when you run, renders something to your screen.

```js
// Note that function components are capitalized, so React knows it's a component
function WelcomeBanner(props) {
  return (
    <header>
      <h1>Home of the {props.name}</h1>
    </header>
  );
}
```

Additionally, you can place components inside other components! *And* you can provide arguments that get bundled up into a `props` object. This object contains your arguments as key:value pairs.

**Pro tip**: You can pass **functions** as arguments into `props` too!

```js
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WelcomeBanner name="Toronto Maple Leafs" />
        // Syntax is an HTML-like element that ends with />
        // Notice how name is referenced as {props.name} above
      </div>
    );
  }
}
```

However, function components have one shortcoming: they don't have access to **state**. State is how we can live update components in React. This is why we need class components...

**Pro tip**: Function components are better for more static cntent like headers, and class components are better for dynamic content like API results.

### Class components

```js
// extends from React.Component to bring in built-in functionality, including state!
class WelcomeBanner extends React.Component {
    // Create a constructor and super with props passed in
    // Passing in props is important and a best practice! 
    constructor(props) {
        super(props);
        // state is the superpower behind class components!
        // state will dynamically change for you!
        this.state = {
            prop: "value"
        }
    }
    // Note that class components must have a render() method in order to run
    render() {
        return (
        <header>
            <h1>Home of the {this.props.name}</h1> // you need to use this!
        </header>
        );
    }
    }
```

## State vs. Props


`props` should be thought of as one-time static pieces of information because:
* Props are always passed down from parent component to child component.
* A component cannot modify the props that it receives, which makes it worse of dynamic data.

`state` should be thought of as dynamic data storage.

Useful flowchart:

![props vs. state flowchart](https://camo.githubusercontent.com/eb4db213862d3c1ec0ca29355fe69c28f579142d/68747470733a2f2f68796368616c6b6e6f7465732e73332e616d617a6f6e6177732e636f6d2f73746174652d70726f70732d666c6f7763686172742d323031382e706e67)

### Managing component state

**Setting initial state** happens in the component constructor. This sets the default values of state.

```js
class Counter extends Component {
	constructor(props) {
		super(props);
   		this.state = {
			count: 0
		};
  	}
}
```

**Updating state** should never be done directly like `this.state.count = 1`.  This renders React useless because React needs to update the virtual DOM! Instead, use the `setState()` method.

```js
updateCounter(newCount) {
    this.setState({
        count: newCount
    });
}
// Notice that setState() is wrapped in a function
// The function makes it easier to link code execution with user input!
```

### Transferring state data between sibling components

It's common that state data gets transferred between sibling components via the parent component. So, for example, you pass `Header` state to `App`, and `App` passes that state to `Footer`.

## Events and Forms

In React, there are 2 ways to work with forms: **controlled components** and **uncontrolled components**.

**Uncontrolled components** rely on the DOM itself for their form data. This is bad in the React world. An example of an uncontrolled component is a signup page where all user inputs are submitted at once. This prevents us from being able to dynamically interact with input *as it's being input*. (Think Google's predictive search.)

**Controlled components** rely on React components. Specifically, you link `state` to input values. This allows React to dynamically pay attention to input changes, and you can update things *as they're happening*.

### Event handling

To allow React to listen to an input and update its state in real time, you need to conform to the following code structure:

```js
class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: " "
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
```

There are 3 key things going on here:
* `this.state.inputValue` is initialized as an empty string.
* We are using the `onChange` attribute provided by JSX to get React to respond to changes, and we're passing a *reference to* (not calling) `this.handleChange`.
* On change, `this.handleChange()` is called, and we use `this.setState()` to update state with state set to `event.target.value`, where the value of the input can be found.

**Pro tip**: `this` is binded very awkwardly and all over the place. If we used a function declaration like `handleChange(event) { // code goes here }`, `this` would be undefined because it doesn't handle `this` too well. The easy solution here is to use ES6 arrow functions because it handles `this` a lot better--at least for React.

## Conditional Rendering

Sometimes we want to render our components differently depending on the data we're given. For example, suppose we want to render 2 different `Header` components depending on what `props` are passed in. If `props.message` is passed in, return X. If not, return Y.

Option 1 is an `if/else` statement.

```js
function Header(props) {
  if (props.message) {
    return (
      <header className="Header__Component">
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </header>
    );
  }

  return (
    <header className="Header__Component">
      <h1>{props.title}</h1>
    </header>
  );
}
```

Option 2 is to use `&&` operator. This is cleaner than option 1! (Note though that this works because it's a quirk of JavaScript. When you use truthy and falsy values as the operands, if it evaluates to true, it returns the right operand instead of `true`. And if it evaluates to false, it returns the left operand instead of `false`.)

```js
function Header(props) {
  return (
    <header className="Header__Component">
      <h1>{props.title}</h1>
      {props.message && <p>{props.message}</p>}
    </header>
  );
}
```

Option 3 is to use a **ternary** operator. This is better than option 2 because it provides an `else` outcome.

```js
function Header(props) {
  return (
    <header className="Header__Component">
      <h1>{props.title}</h1>
      <p>{props.message ? props.message : "Welcome to my app!"}</p>
    </header>
  );
}
```

## Lifecycle Methods

Sometimes you want to perform some checks or tasks *before* you want to view your component in the UI. That's what **lifecycle methods** are for: they allow you to intervene at various stages of a component's lifecycle.

Whenever a React component is added to the DOM, it's called **mounting**. And when it's removed, it's called **unmounting**.

Here's a full view of a component lifecycle, which includes:

![Component Lifecycle](https://camo.githubusercontent.com/f11a59a82d4d664d98c6a5a36fb4d2462a96fffb/68747470733a2f2f68796368616c6b6e6f7465732e73332e616d617a6f6e6177732e636f6d2f72656163742d73696d706c652d6c6966656379636c652e706e67)

The lifecycle methods corresponding to the chart include:
1. `constructor(props)` initializes the component and bind any functions and properties to it.
2. `render()` determines what gets displayed on the page.
3. `componentDidMount()` is a great spot for AJAX requests for data you'd like to use in your component, and it's also where you'll update state (?).
4. `componentDidUpdate(prevProps/prevState, newProps/newState)` is called after you update state or props, taking in previous and new state or props as arguments. This allows you to compare previous values with new values.
5. `componentWillUnmount()` is useful for terminating recurrent logic associated with your component (like a timer or recurring API call).
6. And more...

**Pro tip**: You will find yourself using these 5 methods the most, but there's way more!

## Fetching Data in React

The best structure for fetching data is to call a function containing an API call *inside* `componentDidMount()`.

```js
class App extends Component {
  constructor(props) {}

  componentDidMount() {
    this.fetchMyData();
  }

  async fetchMyData() {
    // Make AJAX request in here
  }
  render() {}
}
```

**Note**: `async` can be used on the function to give us asynchronous code execution, which is especially useful for multiple API calls!

### Axios

It's best to use the **axios** library for API calls in React. `$.ajax()` is totally unneccessary because it means importing the entire jQuery library.

The general syntax and use of axios is:

```js
const axios = require("axios"); // importing with Node.js
import axios from "axios"; // importing with JavaScript

// Notice the use of async and await to deal with the variable time of the API call
async fetchMyData() {
  try {
    const apiData = await axios.get("https://api-url.com", {
      // params contains query parameters
      params: {
        apikey: "65ffg8hg7fgdh"
      }
    });
    // Do whatever you need with your apiData! You'll often set it on your component state like so:
    this.setState({
      data: apiData
    });
  } catch(error) {
    // add error handling here
    // great for catching all issues!
  }
}
```

## Lists and Keys

We already know that we can `map()` over an array of data and convert them to JSX, which we can then render as a list or grid or group of items in the DOM.

The trouble is that React doesn't like not providing a **unique ID** for each item in your array. It throws out an error: `Each child in a list should have a unique "key" prop`.

By providing a unique ID, React will to know update the associated component when the list item changes. Otherwise, React will create a new component.

```js
render() {
  const people = [{name: "Ross", id: 1}, {name: "Rachel", id: 2}, {name: "Phoebe", id: 3}];
  const peopleElements = people.map((person) => {
    // THIS IS THE KEY PART: associating JSX with ID
    return (<li key={person.id}>
      {person.name}
    </li>);
  })

return (<ul>{peopleElements}</ul>);
}
```

**Note**: `key` is a React property, so it only shows up in the virtual DOM, not the actual DOM.

## Passing Data from Child to Parent Component

Passing data from parent to child component is easy: just pass it in `props`. But passing from child to aprent is a bit harder.

The general idea is this:
1. Create method that takes in argument(s), calls `setState()`, and updates state in your parent class component.
2. Pass the *reference* to that method into your child component as a `prop`.
3. Call that function via `props` in your child component, and pass it the data as an argument(s).

```js
// Here's an example that passes data upon click
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  methodForChild = (childData) => {
    this.setState({ data: childData });
  }

  render() {
    return (
      <Child methodForChild={methodForChild} />
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: "I'm going to my parent!"
    }
  }

  render() {
    return (
      <div onClick={() => this.props.methodForChild(this.state.childData)}>
        I'm the child!
      </div>
    )
  }
}
```

**Pro tip**: `onClick` in JSX is quirky because it soft runs the method you pass to test it, and often it will throw an infinite loop because it doesn't feel confident running the method. That's why you want to usually nest the method you want to call *inside* an anonymous function.