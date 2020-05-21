import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "../src/Pages/MovieList.js";
import Navbar from "./components/Navbar.js";
import MovieDetails from "./components/MovieDetails/MovieDetails.js";
import NotFound from "../src/Pages/NotFound.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
