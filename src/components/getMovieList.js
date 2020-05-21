import darkKnightLogo from "../images/darkKnightLogo.jpg";
import fightClubLogo from "../images/fightClubLogo.jpg";
import inherentViceLogo from "../images/inherentViceLogo.jpg";
import requiemForADreamLogo from "../images/requiemForADreamLogo.jpg";
import blacKKKlansmanLogo from "../images/blackKKlansmanLogo.jpg";
import onceUponATimeInHollywoodLogo from "../images/onceUponATimeInHollywoodLogo.jpg";

export default function getMovieList() {
  return [
    {
      id: "thedarkknight",
      title: "The Dark Knight",
      logo: darkKnightLogo,
      details:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    },
    {
      id: "fightclub",
      title: "Fight Club",
      logo: fightClubLogo,
      details:
        "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
    },
    {
      id: "inherentvice",
      title: "Inherent Vice",
      logo: inherentViceLogo,
      details:
        "In a California beach community, private detective Larry \"Doc\" Sportello (Joaquin Phoenix) tends to work his cases through a smoky haze of marijuana. One day, Shasta, a former lover, arrives out of the blue to plead for Doc's help; it seems that Shasta's current beau, rich real-estate tycoon Mickey Wolfmann, has a wife who may be plotting to commit him to a mental hospital. When Mickey and Shasta both disappear, Doc navigates a psychedelic world of surfers, stoners and cops to solve the case.",
    },
    {
      id: "requiemforadream",
      title: "Requiem For A Dream",
      logo: requiemForADreamLogo,
      details:
        'Imaginatively evoking the inner landscape of human beings longing to connect, to love and feel loved, the film is a parable of happiness gloriously found and tragically lost. "Requiem for a Dream" tells parallel stories that are linked by the relationship between the lonely, widowed Sara Goldfarb and her sweet but aimless son, Harry. The plump Sara, galvanized by the prospect of appearing on a TV game show, has started on a dangerous diet regimen to beautify herself for a national audience.',
    },
    {
      id: "blackkklansman",
      title: "BlacKkKlansman",
      logo: blacKKKlansmanLogo,
      details:
        "Ron Stallworth is the first African-American detective to serve in the Colorado Springs Police Department. Determined to make a name for himself, Stallworth bravely sets out on a dangerous mission: infiltrate and expose the Ku Klux Klan. The detective soon recruits a more seasoned colleague, Flip Zimmerman, into the undercover investigation of a lifetime. Together, they team up to take down the extremist hate group as the organization aims to sanitize its rhetoric to appeal to the mainstream.",
    },
    {
      id: "onceuponatimeinhollywood",
      title: "Once Upon A Time In Hollywood",
      logo: onceUponATimeInHollywoodLogo,
      details:
        "Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn't recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double. Rick also happens to live next door to Roman Polanski and Sharon Tate -- the filmmaker and budding actress whose futures will forever be altered by members of the Manson Family.",
    },
  ];
}
