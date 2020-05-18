import React, { Component } from "react";
import { Link } from "react-router-dom";
import getMovieList from "./getMovieList";

export default class movieId extends Component {
  constructor() {
    super();
    this.state = { movie: {} };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovieList().find((movie) => movie.id === movieId);
    this.setState({ movie });
  }

  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
