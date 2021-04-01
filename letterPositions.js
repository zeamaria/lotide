
// RETURN all the INDICES (zero based positions) 
// in the STRING where each CHARACTER is found
// for each LETTER, multiple numbers may be needed 
// to represent all the places in the string that it shows up

// Step 1: Define Object Structure To Return

const letterPositions = function(sentence) {
  // logic to update results here

  let results= {} 

  for (i = 0; i < sentence.length; i++){
    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
      // next step: when counting letters track index number and print in array
      // print index number(s) in array(s) within object
    }
  }


  return results;
};

console.log(letterPositions("testingtestie"));

/*
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !==  ${arr2}`);
  }
}

const eqArrays = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

*/