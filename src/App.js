import React, { Component } from "react";
<<<<<<< HEAD
import MovieList from "../src/Pages/MovieList";
import Navbar from "./components/Navbar";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "../src/Pages/MovieList";
import Navbar from "./components/Navbar";
import MovieId from "./components/MovieId";
import NotFound from "../src/Pages/NotFound";
>>>>>>> 20fa336e531f44c126ae01b5773e58d0acbba583

import "./App.css";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
=======
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={MovieId} />
          </Switch>
        </div>
      </Router>
>>>>>>> 20fa336e531f44c126ae01b5773e58d0acbba583
    );
  }
}

export default App;
