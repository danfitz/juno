import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import './App.css';

class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // releaseDate: 1980
    };
  };

  componentDidMount() {
    this.getMovies();
  };

  getMovies = () => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "e34f013ef15026439088cf9cdb94f352",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: this.state.releaseDate
      }
    }).then(response => {
      const movies = response.data.results;

      this.setState({
        movies,
        // releaseDate: this.state.releaseDate + 1
      });
    });
  };

  // componentDidUpdate() {
    // setTimeout(() => {
    //   this.getMovies();
    // }, 5000);
  // };

  render() {
    return (
      <div className="movie-catalogue">
        {/* <h2>{this.state.releaseDate}</h2> */}
        {this.state.movies.map(movie => {
          return (
            <div className="movie-poster" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
}

export default Catalogue;
