import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <Link to={"/" + props.id} className="movie-poster">
      <img src={props.logo} alt={`${props.title} logo}`} />
      <div className="overlay">
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
