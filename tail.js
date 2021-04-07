// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
    }
};

const tail = function (endArray) {
    let newArray = [];
    for (let i = 0; i < endArray.length; i++) {
        if (i !== 0) {
            newArray.push(endArray[i])
        }
    }
    return newArray;
};

module.exports = tail;

