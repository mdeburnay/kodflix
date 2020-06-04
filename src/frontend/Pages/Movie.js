import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {
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
