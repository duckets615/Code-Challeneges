111// // Password Validation
1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111=11=11=1=111=11=11=1=1=11=11=11=1=1=11=11=11=1=1=11=11=11=1=111=1=111=1=11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-11-1-11-11-11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-11-1-111--11-11-1-1111111111-1-111--11-11-1-11-1-11-11-11-11-1-11-1-11-11-1-111--11-11-11-11--11-1-11-11-1-111--11-111111111111111111111111111111111111111
__
// // Create a function that validates a password to conform to the following rules:

// // XX   Length between 6 and 24 characters.
// // At least one uppercase letter (A-Z).
// // At least one lowercase letter (a-z).
// // At least one digit (0-9).
// // Maximum of 2 repeated characters.
// // "aa" is OK 👍
// // "aaa" is NOT OK 👎
// // Supported Special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .

// function validatePassword(password) {
//     if (password.length > 24) return false;
//     if (password.length < 6 ) return false;
//     if (password.split('').filter(char => char.toUpperCase() === char).length === 0) return false;
//     if (password.split('').filter(char => char.toLowerCase() === char).length === 0) return false;
//     if (password.split('').filter(num => num == +num ).length === 0) return false;
//     if (password.split('').map((el, i) => password[i] === password[i+1] && password[i] === password[i+2]) return false;
//     return true;  
// }

// // Examples
//  console.log(validatePassword("P1zz@")) // false  // too short
//  console.log(validatePassword("P1zz@"))/*?*/
//  console.log(validatePassword("iLoveYou")) //false  // missing number
//  console.log(validatePassword("Fhg93@")) // true  // OK
//  console.log(validatePassword('mypassword11')) // false, 'missing uppercase letter
//  console.log(validatePassword('MYPASSWORD11')) // false, 'missing lowercase letter'
//  console.log(validatePassword('iLoveYou')) //     false, 'missing number')) //
//  console.log(validatePassword('Pè7$areLove')) //  false, 'special character "è" disallowed'


// Create a function that takes two arguments: an array and a number. In the array (the first argument), if an element occurs more than N times (the second argument), remove the extra occurrence(s) and return the result.


// function deleteOccurences(ar,n) {
//     let final = [];
//     ar.map(el => el.filter(el => el === el))
    
// }   

// Examples
//console.log(deleteOccurrences([1, 1, 1, 1], 2)) // [1, 1]

// deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

// deleteOccurrences([true, true, true], 3) ➞ [true, true, true]


// Create a function that takes an array. This array can have all kinds of items, even other arrays. The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:

// If the item is an Array, include each item in it and the following still apply:
// If the item is a Function, include the function's output, not the function itself.
// If the item is a plain Object or a Primitive, include it as is.





console.log(flattenArray( [ [1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' } ] ] ] ) ) // [1, "2", 3, 4, "five", "six", true, { prop: 'val' }])

// If the item is an Array, include each item in it and the following still apply:
// If the item is a Function, include the function's output, not the function itself.
// If the item is a plain Object or a Primitive, include it as is.
//console.log(flattenArray( [ [1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' } ] ] ] ) ) // [1, "2", 3, 4, "five", "six", true, { prop: 'val' }])
//console.log(flattenArray( [ [1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' } ] ] ] ) ) // [1, "2", 3, 4, "five", "six", true, { prop: 'val' }])

// function flattenArray(array) {
//     if (!array) return [];       
//     let flat = [];
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'function') {
//             flat.push(array[i]())
//         } else if (Array.isArray(array[i])) {
//             for (let j = 0; j < array[i].length; j++) {                
//                 if (typeof array[i][j] === 'function') {
//                     flat.push(array[i][j]())
//                 } else if (Array.isArray(array[i][j])) {
//                     for (let t = 0; t < array[i][j].length; t++) {                        
//                         if (typeof array[i][j][t] === 'function') {
//                             flat.push(array[i][j][t]())
//                         } else if (Array.isArray(array[i][j][t])) {
//                             for (let e = 0; e < array[i][j][t].length; e++) {
//                                 flat.push(array[i][j][t][e])                                
//                             }
//                         } else {
//                             flat.push(array[i][j][t])
//                         }
//                     }
//                 } else {
//                     flat.push(array[i][j]);
//                 }
//             }   
//         } else {
//             flat.push(array[i])
//         }
//     }
//     return flat;    
// }

    

// for (let e = 0; e < array[i][j][t].length; e++) {
//     if (typeof array[i][j][t][e] === 'function') {
//         flat.push(array[i][j][t][e]());
//     } else if (Array.isArray(array[i][j][t][e])) {
//
//     } else {
//         flat.push(array[i][j][t][e])
//     }

// If the item is an Array, include each item in it and the following still apply:
// If the item is a Function, include the function's output, not the function itself.
// If the item is a plain Object or a Primitive, include it as is.
//console.log(flattenArray( [ [1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' } ] ] ] ) ) // [1, "2", 3, 4, "five", "six", true, { prop: 'val' }])

//  [ [1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' } ] ] ]

// console.log(flattenArray([1, '2', [3, [4], function () { return 'five'; }]])) //  [1, '2', 3, 4, 'five']
// console.log(flattenArray([1])) // [1]
// console.log(flattenArray()) // []
// console.log(flattenArray([])) // []