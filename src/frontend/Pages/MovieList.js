import React, { useState } from "react";

import Movie from "./Movie";

import darkKnightLogo from "../images/darkKnightLogo.jpg";
import fightClubLogo from "../images/fightClubLogo.jpg";
import inherentViceLogo from "../images/inherentViceLogo.jpg";
import requiemForADreamLogo from "../images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "../images/blackKKlansmanLogo.jpg";
import onceUponATimeInHollywoodLogo from "../images/onceUponATimeInHollywoodLogo.jpg";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  fetch("src/backend/backendMovieList", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setMovies(data));

  return (
    <div className="container" data-aos="fade-in" data-aos-delay="250">
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );

  // constructor() {
  //   super();
  //   this.state = { shows: [] };
  // }

  // render() {
  //   return (
  //     <>
  //       <div className="container" data-aos="fade-in" data-aos-delay="250">
  //         <Movie
  //           id="thedarkknight"
  //           title="The Dark Knight"
  //           logo={darkKnightLogo}
  //         />
  //         <Movie id="fightclub" title="Fight Club" logo={fightClubLogo} />
  //         <Movie
  //           id="inherentvice"
  //           title="Inherent Vice"
  //           logo={inherentViceLogo}
  //         />
  //         <Movie
  //           id="requiemforadream"
  //           title="Requiem For A Dream"
  //           logo={requiemForADreamLogo}
  //         />
  //         <Movie
  //           id="blackkklansman"
  //           title="BlacKkKlansman"
  //           logo={blacKKKlansmanLogo}
  //         />
  //         <Movie
  //           id="onceuponatimeinhollywood"
  //           title="Once Upon A Time In Hollywood"
  //           logo={onceUponATimeInHollywoodLogo}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
}
