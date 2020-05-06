import React from "react";

import Movie from "./Movie";

import darkKnightLogo from "../images/darkKnightLogo.jpg";
import fightClubLogo from "../images/fightClubLogo.jpg";
import inherentViceLogo from "../images/inherentViceLogo.jpg";
import requiemForADreamLogo from "../images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "../images/blackKKlansmanLogo.jpg";
import shawshankRedemptionLogo from "../images/shawshankRedemptionLogo.jpg";

export default function MovieList() {
  return (
    <div>
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
      </div>
      <div className="container">
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
          id="theshawshankredemption"
          title="The Shawshank Redemption"
          logo={shawshankRedemptionLogo}
        />
      </div>
    </div>
  );
}
