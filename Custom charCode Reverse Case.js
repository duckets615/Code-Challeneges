// Without using either the toLowerCase or toUppercase method, reverse the casing
// for each letter in a given string.
// ex. 'abcd' => 'ABCD',  'xYZ' => 'Xyz'

//  hint:   ACSII = 'American Standard Code for Information Interchange'




// function reverseCase(str) {
//     str.split('').map(ele => {
//         let code = str.charCodeAt(ele);
//         code < 97 ? ele = String.fromCharCode(code-32) : ele = String.fromCharCode(code+32);
//     });
//     return str;
// }



// console.log(reverseCase('abcd')) // 'ABCD';
// console.log(reverseCase('xYZ')) // 'Xyz';
// console.log(reverseCase('uPPerCase')) // 'UppERcASE';
// console.log(reverseCase('LOWerCASe')) // 'lowERcasE';
