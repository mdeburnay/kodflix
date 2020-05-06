import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./components/MovieList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MovieList} />
        </div>
      </Router>
    );
  }
}

export default App;
