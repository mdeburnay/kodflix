import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import MovieList from "../src/Pages/MovieList.js";
import MovieDetails from "./components/MovieDetails/MovieDetails.js";
import NotFound from "../src/Pages/NotFound.js";

import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
