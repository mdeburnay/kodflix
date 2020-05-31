const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const movies = require("./backendMovieList");
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, "../../build")));

fetch("http://localhost:3001/api/movieList")
  .then((response) => response.json())
  .then((data) => console.log(data));

app.get("/movieList", (req, res) => res.send(movies.movieList));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);


