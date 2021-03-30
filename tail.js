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
}

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!