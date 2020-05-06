import React, { Component } from "react";
import MovieList from "../src/Pages/MovieList";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    );
  }
}

export default App;
