import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "../src/Pages/MovieList";
import Navbar from "./components/Navbar";
import movieId from "./components/movieId";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/:movieId" component={movieId} />
        </Router>
      </div>
    );
  }
}

export default App;
