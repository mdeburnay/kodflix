import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import getMovieList from "../getMovieList";

import "./MovieDetails.css";

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.state = { movieVar: {} };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    fetch("/movieList", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let movieVar = data.find((movie) => movie.id === movieId);
        this.setState({ movieVar: movieVar });
      });
  }

  render() {
    if (!this.state.movieVar) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="movie-container">
          <img
            className="movie-backdrop-image"
            src={require(`../../images/${this.state.movieVar.id}.jpg`)}
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
