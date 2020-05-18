import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "../src/Pages/MovieList";
import Navbar from "./components/Navbar";
import MovieId from "./components/MovieId";
import NotFound from "../src/Pages/NotFound";

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
            <Route exact path="/:MovieId" component={MovieId} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
