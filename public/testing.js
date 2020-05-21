// function transform(games) {
//   return Object.values(games);
// }

// console.log(
//   transform(
//     { name: "Sekiro", rating: 9 },
//     { name: "Resident Evil 2", rating: 8 },
//     { name: "Spiderman", rating: 8 },
//     { name: "Doom Eternal", rating: 10 },
//     { name: "The Last of Us: Part 2", rating: 10 }
//   )
// );

// function transform(stuff) {
//     return Object.keys(stuff).forEach(value => (
//         return stuff[value]
//     ))
//     }

// As we know, Lauren has far too much stuff and needs to declutter.
// However, we have a few problems - she is quite sentimental, and
// therefore wants to keep those items that were once gifts. Secondly,
// she only has limited room to keep those things that she
// will keep (10 square feet to be exact).

// Let's create a function that will return all items that are sentimental,
// and then notify us when we have ran out of space to store items!
// REMEMBER - Every time you add an item to the room to keep, you reduce
// that amount of space available.

// function isEnoughRoom(items) {
//   let roomSize = 10;
//   return getItems(items) > roomSize
//     ? "They all fit!"
//     : "Time to declutter!";
// }

// function getItems(item) {
//   return parseFloat(item.size) && item.gift === true;
// }

// console.log(
//   isEnoughRoom([
//     { name: "Mr. Pebbles", size: "1 square foot", gift: true },
//     { name: "Yellow jumper", size: "0.5 square foot", gift: false },
//     { name: "Running kit", size: "0.5 square foot", gift: false },
//     { name: "Funky chair", size: "2 square foot", gift: false },
//     { name: "Wall mirror", size: "1 square foot", gift: true },
//     { name: "Elephant pillows", size: "1 square foot", gift: true },
//     { name: "Barney", size: "0.5 square foot", gift: true },
//     { name: "Elephant pillows", size: "2 square foot", gift: true },
//   ])
// );
