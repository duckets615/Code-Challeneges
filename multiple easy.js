//     /*    EB addUp    */

// // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to
// // the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// const addUp = num => new Array(num+1).fill().map((x,i) => i).reduce((acc,cur) => acc + cur)
 
// console.log(addUp(4)) // 10
// console.log(addUp(13)) // 91
// console.log(addUp(600)) // 180300

// // ---------------------  //
//    /*    Num Swap    */

// // Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// // largestSwap(27)  27 < 72 => false 
// // largestSwap(43)  43 > 34 => true 

// const largestSwap = num => num >= +(num.toString().split('').reverse().join(''))

// console.log(largestSwap(27)) // false
// console.log(largestSwap(43)) // true
// console.log(largestSwap(14)) // false
// console.log(largestSwap(53)) // true
// console.log(largestSwap(99)) // true

// // ---------------------  //
//  /*    Small Big Num    */
   
// // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// const minMax = ar => [Math.min(...ar), Math.max(...ar)]
    
// console.log(minMax([1, 2, 3, 4, 5])) // [1, 5]
// console.log(minMax([2334454, 5])) // [5, 2334454]
// console.log(minMax([1])) // [1, 1]

// // ---------------------  //
// /*   Hashes and Pluses   */

// // Create a function that returns the number of hashes and pluses in a string.

// const hashPlusCount = str => [str.split('').filter(el => el === '#').length, str.split('').filter(el => el === '+').length]

// console.log(hashPlusCount("###+")) // [3, 1]
// console.log(hashPlusCount("##+++#")) // [3, 3]
// console.log(hashPlusCount("#+++#+#++#")) // [4, 6]
// console.log(hashPlusCount("")) // [0, 0]

// ---------------------  //
    /* Matchsticks */
// Create a function that takes a number (step) as an argument and returns the amount of 
// matchsticks in that step. See step 1, 2 and 3 in the image above.

const matchHouses = num => num === 0 ? 0 : num * 4 + num + 1

console.log(matchHouses(1)) // 6
console.log(matchHouses(4)) //  21
console.log(matchHouses(87)) // 436

// ---------------------  //
  /*   Transform Set  */
// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

const set = ar => Array.from(new Set(ar));

console.log(set([1, 3, 3, 5, 5])) // [1, 3, 5]
console.log(set([4, 4, 4, 4])) // [4]
console.log(set([5, 7, 8, 9, 10, 15])) // [5, 7, 8, 9, 10, 15]

const hasSpaces = str => str.includes(' ');

console.log(hasSpaces('hello'));
console.log(hasSpaces('code school'));

// ---------------------  //

// Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

//(1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19


sumDigits(7, 8) //➞ 15

sumDigits(17, 20) //➞ 29

sumDigits(10, 12) //➞ 6


// ---------------------  //
// ---------------------  //