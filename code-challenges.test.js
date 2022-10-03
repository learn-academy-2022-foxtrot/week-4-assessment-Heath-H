// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

//const { it } = require("node:test");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
    //Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"];
      expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(colors1));
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(colors2))
    
    });
  });

  // shuffleArray is not defined



// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

const shuffleArray = (arr) => {
    //remove first color in array using .shift
    arr.shift()

    // create variable that with arr.length 
    let shuffleIndex = arr.length

    //iterate shuffleIndex without index 0 
    while (shuffleIndex !=0) {

        //use math.floor(math.random() * shuffleIndex) to create variable that shuffles
        let theShuffle = Math.floor(Math.random() * shuffleIndex)

        // use -- to decrase value of variable by one 
        shuffleIndex--

    }
    // array must be returned 
    return arr
}

// result:
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.144 s
// Ran all test suites.
// ✨  Done in 1.02s.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("netVotes", () => {
    it("that takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        const votes1 = {upVotes: 13, downVotes: 2};
        expect(netVotes(votes1)).toEqual(11);
        const votes2 = {upVotes: 2, downVotes: 33};
        expect(netVotes(votes2)).toEqual(-31);
    });
});

//result: netVotes is not defined


//const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
//const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


// // b) Create the function that makes the test pass.

// create function netVotes
const netVotes = (obj) => {
// subtract downVotes from upVotes
    let total = obj.upVotes - obj.downVotes

    //return total amount of votes
    return total

}

// result:
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.76s.



// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

//const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDupArrray", () => {
    it("takes in two arrays as arguements and returns one array with no duplicate values.", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

        expect(noDupArrray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

//result: ReferenceError: noDupArray is not defined



// // b) Create the function that makes the test pass.

// create a function for above test
const noDupArray = (arr1, arr2) => {
    // use Set to remove duplicates 
    //use spread operator 
    return [...new Set([...arr1, ...arr2])]
}
 //result:
//  Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.147 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.71s.

///////
