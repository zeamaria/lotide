// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);

  // compare lengths
  // if not equal return false
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  // loop through obj2 keys with for..of
  for (const key of objectOneKeys) {
    //compare both obj values for that one key
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};

assertObjectsEqual({ b: 2, a: '1' }, { b: 2, a: '1' }); // PASS
assertObjectsEqual({ b: 2, a: '1' }, { b: 2, c: '1' }); // FAIL
assertObjectsEqual({ b: 2, a: '1' }, { b: 2, a: '1', c: '3' }); // FAIL