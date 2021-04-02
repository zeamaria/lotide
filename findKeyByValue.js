const assertEqual = function (actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// 
//

const findKeyByValue = function (obj, value){

  for (const key in obj ) {
    // look at the keys value 
    let keyValue = obj[key]
    // if the keys value is equal to value(param) 
    if (keyValue === value){
      return key
    }
   // then we want to return actual key
  }
  return undefined
  // object.keys
  // for of ..looping over object.keys
}




//TEST ASSERTIONS

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);