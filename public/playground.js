/*
After this weeks scores on the board challenge, we want to find top
players. As such, lets create a function that can return those who got
first, second or third in every test we have done recently. 

Once we have those on the podium, let's find out who the top player
was overall and display the final result as so:

`The top three this week are ${person1}, ${person2} and ${person3},
with the winner being ${winner}!`

BONUS: If all are women, display the message:
`And look, an all-female podium!`
*/

function winner(players) {
  let podium = players
    .filter((player) =>
      player.positions.every((position) => parseInt(position) <= 3)
    )
    .sort((a, b) => getOverall(a.positions) - getOverall(b.positions));
  let [winner, second, third] = [...podium];
  return (
    podium.every((player) => player.gender === "f") &&
    `The top three this week are ${winner.name}, ${second.name} and ${third.name},
    with the winner being ${winner.name}! And look, an all-female podium!`
  );
}

function getOverall(positions) {
  let numbers = positions.map((position) => parseInt(position));
  return numbers.reduce(
    (total, position) => total + position / positions.length,
    0
  );
}

console.log(
  winner([
    { name: "Lauren", positions: ["1st", "1st", "2nd"], gender: "f" },
    { name: "Max", positions: ["2nd", "3rd", "5th"], gender: "m" },
    { name: "Elena", positions: ["2nd", "1st", "2nd"], gender: "f" },
    { name: "Aaron", positions: ["5th", "7th", "7th"], gender: "m" },
    { name: "Vicky", positions: ["2nd", "2nd", "2nd"], gender: "f" },
    { name: "Maxim", positions: ["6th", "7th", "3rd"], gender: "m" },
  ])
);
