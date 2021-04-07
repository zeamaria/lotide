

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; ++i) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
//   }
// };



// ACTUAL FUNCTION
// Implement middle which will take
// in an array and return the middle-most element(s) of the given array.
// 1. count over the array
// 2. divide array in 2
// 3. if odd number return 1
// 4. if even whole, select 2 numbers to return

const middle = function(array) {
  let returnArray = [];
  let middleIndex = Math.floor(array.length / 2);
   
  if (array.length <= 2) {
    console.log('blank');
    return [];
  
  }
  
  if (array.length % 2 === 0) {
    // even
    //console.log('even')
    middleIndex;
    let var1 = array[middleIndex - 1];
    let var2 = array[middleIndex];
      
    returnArray.push(var1,var2);
        

  } else {
    //console.log('else')
    //console.log('test', array)
    let middleElement = array[middleIndex];
    returnArray.push(middleElement);
  }
  console.log(returnArray);
  return returnArray;
};
    
module.exports = middle;





