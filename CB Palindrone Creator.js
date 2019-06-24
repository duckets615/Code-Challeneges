// CODERBYTE:   Palindrone Creator
/*
Have the function PalindromeCreator(str) take the str parameter being 
passed and determine if it is possible to create a palindromic string 
of minimum length 3 characters by removing 1 or 2 characters. For example:
 if str is "abjchba" then you can remove the characters jc to produce "abhba"
  which is a palindrome. For this example your program should return the two 
  characters that were removed with no delimiter and in the order they appear 
  in the string, so jc. If 1 or 2 characters cannot be removed to produce a 
  palindrome, then return the string not possible. If the input string is 
  already a palindrome, your program should return the string palindrome.
  */

//  function PalindromeCreator(str) { 
    
//     if (str.split('').reverse().join('') === str) return `palindrone`;
//     for (let i = 0; i < str.length; i++) {
//         let removed1 = str.slice(i, i+1)
//         let newstr = str.slice(i, i+1) + str.slice(i+1);
//         if (newstr.split('').reverse().join('') === newstr) {
//             return removed1;
//         }
//         for (let j = i+1; j < str.length ; j++) {
//             let removed2 = str.slice(j, j+1);
//             let slice2 = newstr.slice(removed2);
//             if (slice2.split('').reverse().join('') === slice2) return removed1 + removed2;            
//         }
//     }
//     return `not possible`;
// }

function PalindromeCreator(str) {
    
}
   
//console.log(PalindromeCreator('"mmop"')); // not possible
console.log(PalindromeCreator('kjjjhjjj')); // k
//console.log(PalindromeCreator('ammjmmhmm')); // jh
//console.log(PalindromeCreator('abcdcba')); // palindrone


