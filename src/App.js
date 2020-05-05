import React from "react";
import "./App.css";

import kodflixLogo from "./images/kodflixLogo.png";

function App() {
  return (
    <div>
      <img src={kodflixLogo} alt="Main Kodflix Logo" />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="movie-poster">Inherent Vice</div>
        <div className="movie-poster">Shawshank Redemption</div>
        <div className="movie-poster">The Dark Knight</div>
      </div>
      <div className="container">
        <div className="movie-poster">Fight Club</div>
        <div className="movie-poster">Requiem For A Dream</div>
        <div className="movie-poster">The Other Guys</div>
      </div>
    </div>
  );
}

export default App;
