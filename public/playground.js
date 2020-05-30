/*As it was Jills birthday, we want to get her a belated
birthday gift in the form of a bouquet of flowers. Sadly,
the ones she likes are all muddled up within different bouquets (arrays).

Jill likes:

Lily's, Rose's, Lavender's and Daffodils.

Let's create a function that will find which bouquet of flowers
contains her favourite flowers, before taking her favourites from them 
as well as removing those she does not like and 
returning a new bouquet.

*/

console.log(
  getFlowers(
    [
      ["Lily", "Rose", "Peony", "Daffodil"],
      ["Red Flower thing", "Daisy"],
    ],
    [
      ["Snowdrop", "Lilac", "Blue Flower from fucking Stoke"],
      ["Daisy", "Lilac", "Lavender", "Rose"],
    ]
  )
);

// function getFlowers(bouquet1, bouquet2) {
//   let faves = ["Lily", "Rose", "Lavender", "Daffodil"];
//   let newBouquet1 = [];
//   let newBouquet2 = [];
//   for (let bunch of bouquet1) {
//     for (let flower of bunch) {
//       if (faves.includes(flower)) {
//         newBouquet1.push(bunch);
//       }
//     }
//   }
//   for (let bunch of bouquet2) {
//     for (let flower of bunch) {
//       if (faves.includes(flower)) {
//         newBouquet2.push(bunch);
//       }
//     }
//   }
//   return newBouquet1
// }
