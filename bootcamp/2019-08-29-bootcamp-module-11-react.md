---
categories: [frontend]
tags: [js]
title: "Bootcamp Module 11: React"
source: [juno]
---

## Intro to React

React is great for **single-page applications** where information at select parts of the page are updated dynamically based on user interaction.

Unlike traditional HTML/CSS/JS, the power of React is that it doesn't reload the *entire* page when it wants to make a change. It only changes what *needs* to be changed.

### JSX

Random insights:

* When you render JSX, you must return only ONE JSX element (with as many children nested inside that you want).

* `class` and `for` are reserve keywords, so to add attributes to a JSX element, you need to use `className` and `htmlFor`.

* **Pro tip**: JSX elements are **expressions**, so they can be placed into variables, passed into function, and stored in arrays and objects!

* To add JavaScript into your JSX, just wrap the JavaScript code in `{}`. However, `{}` will only accept JavaScript expressions.

* A common place to run JavaScript code, however, is inside the `render()` method but before the `return` statement.

## Breaking Our App into Components

When passing a list of JSX elements into a `render()` method, React expects a unique **key** to be passed to each JSX element. React needs this key to identify which element in the DOM to update.

Simple solution: When using `map()` to convert data to JSX elements, just utilize the `index` parameter to create a unique key.

## Events (and State)

In React, when dealing with events, instead of writing an external event handler like in jQuery, we create a **method** and place a reference to the method **inside JSX**.

```js
class Button extends Component {
  handleClick(){
    alert("Item added to the shopping cart!");
  }

  render() {
    return (
      <button onClick={this.handleClick}>Add to cart</button>
    )
  }
}
```

### State

Think of state as **component-scoped variables**. For example, if Netflix was using React, somewhere in their code would be state that says `loggedIn: false`. Based on user interaction, `loggedIn` can change value.

To incorporate state, just do this:

```js
class Button extends Component {
    constructor() {
        super(); // required!
        
        this.state = {};
    }
}
```

**Pro tip**: `state` is a property that is built into the `Component` class. All you do is incorporate state into your component using `super()` and then override its value with a `this.state` assignment.

Every time that you update state, the component gets **re-rendered** by re-running the `render()` method.

Things you need to do when working with state:

* You must include `super()` in the constructor.
* You should use **arrow function** syntax when creating a component method that uses state, or else `this` won't refer to the component when you write `this.state`.
* You must use `this.setState({ key: value })` when updating state, not try to directly update state via `this.state = {}` assignment.

**Note**: If you notice, `this.state` works inside the `render()` method but not in your other component methods like `handleClick()` methods. This is because these component methods get called *inside* the `render()` method, which changes the execution context and therefore also the value of `this`.

## Lifecycles

React is kind of like a black box, but the developers gave us special methods that allow us to inject our own code at different points in the lifecycle of a component.

The 2 main lifecycle methods you will use:
* `componentDidMount()` only runs once when the component first gets added the DOM. It's great for making API calls here. (Shows the user a page and THEN starts making an API call, which is what the user expects.)
* `componentDidUpdate()` runs any time things like state or props change.

## Props

`props` is the second place where we store information besides `this.state`. Its real power lies in the fact that it lets you pass information **between** parent and child components. Think of `props` as drilling a hole between parent and child components: the parent component can throw stuff down to the child, but not vice versa.

Basic structure for utilizing props:

```js
class ChildComponent extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ChildComponent text="I'm a prop!" />
    );
  }
}
```

### Passing functions as props

`props` become super powerful when you pass a parent method to a child component, giving the child component the power to affect the parent component!

```js
class ChildComponent extends Component {
  render() {
    return (
      <button onClick={this.props.changeParentState}>Change Parent State Now!</button>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }
  changeParentState = () => {
    this.setState({
      num: this.state.num + 1;
    })
  }
  render() {
    return (
      <ChildComponent changeParentState={this.changeParentState} />
    );
  }
}
```

Think of passing functions through `props` like throwing a rope down the drilled hole to the child component. Although the child can't directly throw stuff up to the parent component, the child can pull a rope that starts a function in the parent component.

### What's the difference between state and props?

`props` kind of acts like a parameter in a function: you pass in information from the parent for the child to use. `state` is usually better for information that needs to dynamically change.

### Proptypes

Proptypes is an npm package that allows you to gate `props`, checking to make sure that the information you pass is of a certain data type.

## Reusable Components

When we create a class component, we're pulling in all of the functionality that comes with a class component: lifecycle methods, state, etc.

Sometimes we don't need this high-powered functionality. That's when we use a **function component** or **stateless component** or **presentational component**. The entire job of function components is just to return and present JSX.

## Using Firebase in React

1. `npx create-react-app my-react-app` to create React app boilerplate.

2. Create firebase app on [console](https://console.firebase.google.com).

3. Create web app on firebase.

4. `npm install firebase --save` inside `my-react-app` folder.

5. Create a `firebase.js` file inside `src` folder and input the following code:

```js
// firebase.js
import firebase from 'firebase';

// Initialize Firebase
// REPLACE THIS WITH YOUR CONFIG OBJECT
const firebaseConfig = {
  apiKey: "myApiKey",
  authDomain: "fir-react-8e1e7.firebaseapp.com",
  databaseURL: "https://fir-react-8e1e7.firebaseio.com",
  projectId: "fir-react-8e1e7",
  storageBucket: "",
  messagingSenderId: "490141321241",
  appId: "1:490141321241:web:6793e9f8d0ec3aa0"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;
```

6. Import your configured `firebase` into your `App.js` file.

7. Inside a `componentDidMount()` method, add `const dbRef = firebase.database().ref();`.

## Deploying with Firebase

1. You want to compile your React app into a bunch of static files because that's what the browser will be able to render. To do this, simply use `npm run build`.

2. Globally install `firebase-tools` using `npm install firebase-tools -g`, the CLI for deploying to Firebase.

3. Run `firebase login` to log into your Google account.

4. Run `firebase init` in your project folder to configure your project for Firebase, making sure to make your `build` folder the source.

5. Run `firebase deploy` to push your project's `build` folder to live Firebase site.

## Routing

By default, React is literally just serving you everything on one file: the `index.html` file.

Routing makes it possible to create the *experience* of multiple pages.

To create add router to your React app, do the following:

1. `npm install react-router-dom --save-dev`.

2. `import { BrowserRouter as Router, Router, Link } from "react-router-dom";` to include React Router in your app.

3. Wrap your `App` component render with a `<Router></Router>` component. **Note**: You can only have **1** Router component in your entire app.

4. Inside `<Router></Router>`, add a `<Route path="/myPath" component={componentToRenderAtPath} />`. Now `componentToRenderAtPath` will render only when the user goes to `myApp.com/mypath`.

5. Add a `<Link to="/myPath">My Link</Link>` to point to the route, which when clicked, displays the component for the route.