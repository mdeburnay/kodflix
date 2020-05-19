import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getMovieList from "./getMovieList";

export default class MovieId extends Component {
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
        <div>
          <h1>{this.state.movie.title}</h1>
          <Link to="/">Home</Link>
        </div>
      );
    }
  }
}
