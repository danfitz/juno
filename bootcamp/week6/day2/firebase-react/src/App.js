import React, { Component } from 'react';
import './App.scss';
import firebase from "./firebase.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      userInput: "",
      authorInput: ""
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", response => {
      const data = response.val();

      const booksArray = [];

      for (let key in data) {
        booksArray.push({
          title: data[key].title,
          id: key,
          author: data[key].author
        });
      }

      this.setState({
        books: booksArray
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.userInput.trim()) {
      const dbRef = firebase.database().ref();
      dbRef.push({ title: this.state.userInput, author: this.state.authorInput });

      this.setState({
        userInput: ""
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  removeBook = (bookId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(bookId).remove();
  }

  booksToJsx() {
    const booksJsx = this.state.books.map((book) => {
      return (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <button onClick={() => {this.removeBook(book.id)}}>Remove Book</button>
        </li>
      )
    });

    return booksJsx;
  }

  render() {

    return (
      <div className="App">
        <h1>Bookshelf App</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            name="userInput"
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <input
            name="authorInput"
            type="text"
            value={this.state.authorInput}
            onChange={this.handleChange}
          />
          <button>Add New Book</button>
        </form>
        <ul>
          {this.state.books.length ? this.booksToJsx() : "Page loading..." }
        </ul>
      </div>
    );
  };
};

export default App;
