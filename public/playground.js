// function multiply(num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// }

function expression(num, operation) {
  return !operation ? num : operation(num);
}

function ten(operation) {
  return expression(10, operation);
}

function multiply(Fn1) {
  return function (Fn2) {
    return Fn1 * Fn2;
  };
}

console.log(ten(multiply(ten())));
