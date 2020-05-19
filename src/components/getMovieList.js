import darkKnightLogo from "../images/darkKnightLogo.jpg";
import fightClubLogo from "../images/fightClubLogo.jpg";
import inherentViceLogo from "../images/inherentViceLogo.jpg";
import requiemForADreamLogo from "../images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "../images/blackKKlansmanLogo.jpg";
import onceUponATimeInHollywoodLogo from "../images/onceUponATimeInHollywoodLogo.jpg";

export default function getMovieList() {
  return [
    { id: "thedarkknight", title: "The Dark Knight", logo: darkKnightLogo },
    { id: "fightclub", title: "Fight Club", logo: fightClubLogo },
    { id: "inherentvice", title: "Inherent Vice", logo: inherentViceLogo },
    {
      id: "requiemforadream",
      title: "Requiem For A Dream",
      logo: requiemForADreamLogo,
    },
    { id: "blackkklansman", title: "BlacKkKlansman", logo: blacKKKlansmanLogo },
    {
      id: "onceuponatimeinhollywood",
      title: "Once Upon A Time In Hollywood",
      logo: onceUponATimeInHollywoodLogo,
    },
  ];
}
