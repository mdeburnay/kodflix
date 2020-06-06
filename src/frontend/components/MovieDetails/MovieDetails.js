import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getMovieList from "../getMovieList";

import "./MovieDetails.css";

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.state = { movie: {} };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovieList().find((movie) => movie.id === movieId);
    this.setState({ movie: movie });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="movie-container">
          <img
            className="movie-backdrop-image"
            src={this.state.movie.backdrop}
            alt="Backdrop Pic"
          />
          <h1 className="movie-title" data-aos="fade-right">
            {this.state.movie.title}
          </h1>
          <div className="synopsis-container">
            <div className="movie-synopsis" data-aos="fade-right">
              {this.state.movie.details}
            </div>
          </div>
          <Link className="home-button" to="/">
            Home
          </Link>
        </div>
      );
    }
  }
}
