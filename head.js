// // FUNCTION IMPLEMENTATION
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(fullArray) {
  return fullArray[0];
}

module.exports = head;

// // TEST 
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");