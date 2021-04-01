const assertEqual = function (actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

/*
1. Take in sentance (string)
2. Return a count of each of the letters in that string
i.e countLetters('LHL') should return results indicating that L appears twice, and H once.
*/
const countLetters = function(sentance) {

  let countObj = {} 

  for (i = 0; i < sentance.length; i++){
    if(countObj[sentance[i]]) {
      countObj[sentance[i]] = countObj[sentance[i]] + 1;
    } else {
      countObj[sentance[i]] = 1;
    }
  }

  return countObj;
}

console.log(countLetters("test"));