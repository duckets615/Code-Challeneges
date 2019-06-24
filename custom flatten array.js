// function flat(array) {
//     let ar = [];
//     while (array.length >= 1) {
//         ar = ar.concat(array[0]);
//         array.shift();       
//     }
//     return ar.sort((a,b) => a - b)
// } 

const flat = ar => [].concat(...ar).sort((a,b) => a - b);

console.log(flat([[3, 2, 1], [7, 9, 8], [6, 4, 5]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9])