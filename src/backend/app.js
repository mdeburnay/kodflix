const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const movies = require("./backendMovieList");

app.get("/movieList", (req, res) => res.send(movies));

app.use(express.static(path.join(__dirname, "../../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
