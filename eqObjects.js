const assertEqual = function (actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const objectOneKeys = Object.keys(object1)

  const objectTwoKeys = Object.keys(object2)
  // compare lengths
  if (objectOneKeys.length !== objectTwoKeys.length){
    return false
  }
  // if not equal return false
// loop through obj2 keys with for..of
 for (const key of objectOneKeys){
   //compare both obj values for that one key
   if(object1[key] !== object2[key]) {
     return false
   }
 }
return true

};



// TEST

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true) // => true


assertEqual(eqObjects(ab, abc), false) // => false

