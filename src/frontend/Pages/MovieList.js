import React, { useState, useEffect } from "react";

import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movieList")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="container" data-aos="fade-in" data-aos-delay="250">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          logo={require(`../Pages/movieListImages/${movie.id}.jpg`)}
        />
      ))}
    </div>
  );
}
