const express = require("express");
const app = express();
const port = 3001;
const movies = require("./backendMovieList");

app.get("/movieList", (req, res) => res.send(movies.movieList));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
