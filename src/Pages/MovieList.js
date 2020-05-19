import React from "react";
import getMovieList from "../components/getMovieList";
import Movie from "../Pages/Movie";

export default function MovieList() {
  return (
    <div>
      <div className="container">
        {getMovieList().map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            logo={movie.logo}
          />
        ))}
      </div>
    </div>
  );
}
