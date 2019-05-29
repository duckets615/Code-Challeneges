/*

Given an array of integers, find the single value that repeats an odd number of times;

ex. [1,1,2,2,2,3,3] => 2;
ex. [6,6,7,7,8,8,8] => 8;

There will always be one value that repeats an odd number of times;

*/




// function findOdd(array) {
//     let count = 0, length = array.length;
//     for (let i = 0; i < length; i++) {
//         count = 0;
//         for (let j = 0; j < length; j++) {
//             if (array[i] === array[j]) count++;
//         }
//         if (count % 2 !== 0) {
//             return array[i]
//         } else {
//             count = 0;
//         }
//     }
// }

function findOdd(array) {
    let obj = {};
    array.map(ele => obj[ele] === undefined ? obj[ele] = 1 : obj[ele] += 1)
    for (var ele in obj) {
        if (obj[ele] % 2 !== 0) return ele
    }
}

console.log(findOdd([1,1,2,2,2,3,3])) // 2
console.log(findOdd([6,6,7,7,8,8,8])) // 8
console.log(findOdd([1,2,2,3,3])) // 1