// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// https://web.compass.lighthouselabs.ca/days/w01d2/activities/813

const eqArrays = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = assertEqual;

