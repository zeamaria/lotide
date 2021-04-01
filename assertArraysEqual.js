//https://web.compass.lighthouselabs.ca/activities/814

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

assertArraysEqual([1,2,3],[1,2,3]); // Pass
assertArraysEqual([1,2,3],[1,2,5]); // Fail