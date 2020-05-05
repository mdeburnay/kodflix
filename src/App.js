import React, { Component } from "react";
import "./App.css";

import darkKnightLogo from "./images/darkKnightLogo.jpg";
import fightClubLogo from "./images/fightClubLogo.jpg";
import inherentViceLogo from "./images/inherentViceLogo.jpg";
import requiemForADreamLogo from "./images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "./images/blackKKlansmanLogo.jpg";
import shawshankRedemptionLogo from "./images/shawshankRedemptionLogo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="movie-poster">
            <img src={darkKnightLogo} alt="Dark Knight Poster" />
            <div className="overlay">
              <h2>The Dark Knight</h2>
            </div>
          </div>
          <div className="movie-poster">
            <img src={fightClubLogo} alt="Fight Club Poster" />
            <div className="overlay">
              <h2>Fight Club</h2>
            </div>
          </div>
          <div className="movie-poster">
            <img src={inherentViceLogo} alt="Inherent Vice Poster" />
            <div className="overlay">
              <h2>Inherent Vice</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="movie-poster">
            <img src={requiemForADreamLogo} alt="Requiem For A Dream Poster" />
            <div className="overlay">
              <h2>Requiem For A Dream</h2>
            </div>
          </div>
          <div className="movie-poster">
            <img src={blacKKKlansmanLogo} alt="BlacKkKlansman Poster" />
            <div className="overlay">
              <h2>BlacKKKlansman</h2>
            </div>
          </div>
          <div className="movie-poster">
            <img
              src={shawshankRedemptionLogo}
              alt="Shawshank Redemption Poster"
            />
            <div className="overlay">
              <h2>The Shawshank Redemption</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
