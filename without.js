//https://web.compass.lighthouselabs.ca/activities/816

function eqArrays(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !==  ${arr2}`);
  }
}

function without(source, itemsToRemove) {
  let newArray = [];
  for (var i = 0; i < source.length; ++i) {
    let addToArray = true;
    for (var e = 0; e < itemsToRemove.length; ++e) {
      if(source[i] === itemsToRemove[e]) {
        addToArray = false;
      }
    }
    if(addToArray) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);