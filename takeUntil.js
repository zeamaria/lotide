  // return a "slice of the array with elements taken from the beginning." 
  // function should keep going until the callback/predicate returns a truthy value
  // the callback should only be provided one value: The item in the array.

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {

  let newArr = [];
  for(let i=0; i < array.length; i++) {
    if(!callback(array[i])) {
      newArr.push(array[i]);
    } else {
      return newArr;
    }
  }

}

// // EXPECTED INPUT 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// // return is defining x
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// //EXPECTED OUTPUT 

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
