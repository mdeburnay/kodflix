import React from "react";
import { Link } from "react-router-dom";
import fetchData from "../common/fetch";

export default class extends Movie.Component {
  constructor() {
    super();
    this.state = { shows: [] };
  }

  componentDidMount() {
    fetchData("api/movieList").then((movieList) =>
      this.setState({ movieList })
    );
  }

  render() {
    return (
      <Link to={"/" + props.id} className="movie-poster">
        <img
          src={props.logo}
          className="movie-image"
          alt={`${props.title} logo}`}
        />
        <div className="overlay">
          <div className="text-box">{props.title}</div>
        </div>
      </Link>
    );
  }
}
