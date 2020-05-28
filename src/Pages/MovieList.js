import React from "react";

import Navbar from "../components/Navbar.js";
import Movie from "../Pages/Movie";

import darkKnightLogo from "../images/darkKnightLogo.jpg";
import fightClubLogo from "../images/fightClubLogo.jpg";
import inherentViceLogo from "../images/inherentViceLogo.jpg";
import requiemForADreamLogo from "../images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "../images/blackKKlansmanLogo.jpg";
import onceUponATimeInHollywoodLogo from "../images/onceUponATimeInHollywoodLogo.jpg";

export default function MovieList() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Movie
          id="thedarkknight"
          title="The Dark Knight"
          logo={darkKnightLogo}
        />
        <Movie id="fightclub" title="Fight Club" logo={fightClubLogo} />
        <Movie
          id="inherentvice"
          title="Inherent Vice"
          logo={inherentViceLogo}
        />
        <Movie
          id="requiemforadream"
          title="Requiem For A Dream"
          logo={requiemForADreamLogo}
        />
        <Movie
          id="blackkklansman"
          title="BlacKkKlansman"
          logo={blacKKKlansmanLogo}
        />
        <Movie
          id="onceuponatimeinhollywood"
          title="Once Upon A Time In Hollywood"
          logo={onceUponATimeInHollywoodLogo}
        />
      </div>
    </div>
  );
}
