// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// take a collection of items
// return counts for a specific subset of those items
// don't count everything - given an idea of which items we care about
// only count items we care about
// ignore the rest
// items are limted to strings


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  let newObj = {};

  // Loop through all names, allItems
  for(let i = 0; i < allItems.length; i++) {
    // Check if name is in the itemsToCount object
    // allItems[i] = Karl the first loop, Salima the second, etc.
    if(itemsToCount[allItems[i]]) {
      if(newObj[allItems[i]]) {
        newObj[allItems[i]] = newObj[allItems[i]] + 1;
      } else {
        newObj[allItems[i]] = 1;
      }
    }
  }
  return newObj;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);