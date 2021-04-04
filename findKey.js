const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// take in an object and a callback
// scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.

const findKey = function (obj, callback) {
  // scan object
  for (const key in obj) {
    // when first key equals true
    if (callback(obj[key])) {
      // return that key that equals true
      return key;
    }
  }
  return undefined;
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result)