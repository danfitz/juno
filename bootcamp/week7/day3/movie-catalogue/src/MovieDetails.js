import React, { Component } from 'react';
import axios from "axios";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ""
    };
  };

  componentDidMount() {
    axios({
      url: `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}`,
      params: {
        api_key: "e34f013ef15026439088cf9cdb94f352"
      }
    }).then(response => {
      const movie = response.data;
  
      this.setState({
        movie
      });
    });
    // this.getMovie();
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.movieId !== this.props.match.params.movieId) {
  //     this.getMovie();
  //   };
  // };

  // getMovie = () => {
  // };

  render() {
    return (
      <div className="single-movie">
        <img className="single-movie-image" src={`http://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} alt={this.state.movie.title} />

        <div className="single-movie-description">
          <h1>{this.state.movie.title}</h1>
          <h2>{this.state.movie.tagline}</h2>
          <p>{this.state.movie.overview}</p>
        </div>
      </div>
    );
  };
}

export default MovieDetails;