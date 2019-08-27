
// Input: "apple"
// Step 1: Reverse the input: "elppa"
// Step 2: Replace all vowels using the following chart:
// Step 3: Add "aca" to the end of the word: "1lpp0aca"
// Output: "1lpp0aca"

// let vowels = {a: 0, e: 1, o: 2, u: 3}
// const encrypt = word => [...word].reverse().map(char => char.replace(/[aeiou]/, vowels[char])).join('') + 'aca'


// encrypt('apple') /*?*/// 1lpp0aca
// encrypt("karaca")/*?*/// "0c0r0kaca"
// encrypt("burak")/*?*/// "k0r3baca"
// encrypt("banana")/*?*/// "0n0n0baca"
// encrypt("alpaca")/*?*/// "0c0pl0aca"
// encrypt("hello")/*?*/// "2ll1haca"

// smallets transform
// Create a function that returns the smallest number of changes it takes to transform one number into one with identical digits. A step is incrementing or decrementing a digit by one.

function smallestTransform(num) {

}

smallestTransform(399)/*?*/// 6
// 399 transformed to 999 in 6 steps.
smallestTransform(1234)/*?*/// 4
// 1234 can be transformed to either 2222 or 3333 using 4 steps.
smallestTransform(153)/*?*/// 4
smallestTransform(33338)/*?*/// 5
smallestTransform(7777)/*?*/// 0