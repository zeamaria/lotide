

const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for 1", () => {
    // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1]), [])
  })

  it("returns [] for 1 2", () => {
    // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1,2]), [])
  })

  it("returns 2 for 1 2 3", () => {
    // 24 // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1, 2, 3]), [2])  
  })

  it("returns 3 for 1 2 3 4 5", () => {
    // 24 // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])  
  })

  it("returns 2 3 for 1 2 3 4", () => {
    // 24 // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])  
  })

  it("returns 3 4 for 1 2 3 4 5 6", () => {
    // 24 // first inputing, second compare against & produce outcome.
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])  
  })

  

 });

 


// TEST CODE


// //For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]); // => []
// middle([1, 2]); // => []

// //For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]

// //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]