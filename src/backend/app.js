const express = require("express");
const app = express();
const port = 3001;
const movies = require("./backendMovieList");

fetch("http://localhost:3001/movieList")
.then((response) => response.json())
.then((data) => console.log(data));

app.get("/movieList", (req, res) => res.send(movies.movieList));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
