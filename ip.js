



//const posDom = ar => new Set(ar.filter(el => el > 0)).size > new Set(ar.filter(el => el < 0)).size

// posDom([1,23,3,4]) /*?*/ 
// posDom([1,1,1,1,1,1,2,3, -23,- 3,- 4]) /*?*/ 
// posDom([1,-23,3,4]) /*?*/ 


// // Challenge #4
// // Write a function that returns the most frequent character in an array of words.
// //    If multiple characters tie for most frequent, list all of them in alphabetical order.
// //    Words will be in lower case.





// mostFrequentChar(["apple", "bandage", "yodel", "make"]) /*?*/
// // ➞ ["a", "e"]

//  mostFrequentChar(["music", "madness", "maniac", "motion"]) /*?*/
// // ➞ ["m"]

//  mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"]) /*?*/
// // ➞ ["e", "h", "i"]

// //sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length

// Code Challenge #3
// Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not. For information on IPv4 formatting, please refer to the resources in the Resources tab.
//    IPv6 addresses are not valid.
//    Leading zeros are not valid (123.045.067.089 should return false).
//    You can expect a single string for every test case.

// function isValidIP(str) {
//     if (str.replace(/[0-9]/g, '').length !== 3) return false
//     let Length = str.length
//     for (let i = 0; i < Length; i++) {
//         if (str[i] === '.' && str[i+1] === '0') return false;
//         if (str[i] === '.' && +(str[i+1] + str[i+2] + str[i+3]) > 255) return false;        
//     }
//     return true;
// }



// isValidIP("1.2.3.4") /*?*/ // true
// isValidIP("1.2.3")  /*?*/ // false
// isValidIP("1.2.3.4.5")  /*?*/ // false
// isValidIP("123.45.67.89")  /*?*/ // true
// isValidIP("123.456.78.90")  /*?*/ // false
// isValidIP("123.045.067.089") /*?*/ // false


// function hunger(ar) {
//     let san = ar[0];
    
//     let x = ar.slice(1)
//     for (let i = 0; i < x.length - 1; i++) {
//         if (san <= 0) san = 0;
//         if (x[i] - x[i+1] < san) {
//             x[i] = x[i] - x[i+1];
//         } else {
//             x[i] = x[i] - san
//         }
//         san = san - (x[i] - x[x+1]);
//     }
//     return x
// }

// //hunger([5, 2, 3, 4, 5]) /*?*/ // 1
//  hunger([3, 2, 1, 0, 4, 1, 0]) /*?*/ // 4

// Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
// // Sample Test Cases

// function SimpleMode(ar) {
//     // let array = ar.sort((a,b) => ar.filter(num => num === b).length - ar.filter(num => num === a).length); /*?*/
//     // return array[0] === array[1] ? array[0] : -1
//     let mode = 0, max = 0, count = 0, Length = ar.length;
//     for (let i = 0; i < Length; i++) {
        
//     }
// }

// // SimpleMode([5,5,2,2,1]) /*?*/ // 5
// // SimpleMode([3,4,1,6,10]) /*?*/ // -1
//  SimpleMode([1,2,2,3]) /*?*/ // 2
// SimpleMode([100,200,100,45,3]) /*?*/ // 0
// // SimpleMode([4,5,1,6,7,8,100,200,1000,5]) /*?*/ // 5
// // SimpleMode([4,4,5,6,7,8,8,8,8,8]) /*?*/ // 8
// // // SimpleMode([4,5,6,1,2,4]) /*?*/ // 4

// function powerSet(arr) {
  
//     var powers = [];    
//     var total = Math.pow(2, arr.length);    
//     for (var i = 0; i < total; i++) {      
//       var tempSet = [];      
//       var num = i.toString(2);      
//       while (num.length < arr.length) { num = '0' + num; }      
//       for (var b = 0; b < num.length; b++) {
//         if (num[b] === '1') { tempSet.push(arr[b]); }    
//         }
//       powers.push(tempSet);
//       }
//     return powers;
// }
  
//   powerSet([1, 2, 3]) /*?*/
//   //function powerSet(arr) {
  
//     // the final power set
//     var powers = [];
    
//     // the total number of sets that the power set will contain
//     var total = Math.pow(2, arr.length);
    
//     // loop through each value from 0 to 2^n
//     for (var i = 0; i < total; i++) {
      
//       // our set that we add to the power set
//       var tempSet = [];
      
//       // convert the integer to binary
//       var num = i.toString(2);
      
//       // pad the binary number so 1 becomes 001 for example
//       while (num.length < arr.length) { num = '0' + num; }
      
//       // build the set that matches the 1's in the binary number
//       for (var b = 0; b < num.length; b++) {
//         if (num[b] === '1') { tempSet.push(arr[b]); }    
//       }
      
//       // add this set to the final power set
//       powers.push(tempSet);
      
//     }
    
//     return powers;
    
//   }
  
//   powerSet([1, 2, 3]); 




// Good morning! Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string  'aabcccccaaa' would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string, then your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

// function compress(str) {
//     let newstr = '';
//     let ar = Array.from(new Set(str))
//     ar.map(el => {
//         let cur = new RegExp(el, 'g');
//         newstr += el + str.match(cur).length
//     })
//     return newstr
// }

// compress('aaabbcdddddee') /*?*/ // a3b2c1d5e2
// compress('abcd') /*?*/ // a1b1c1d1

// // Good morning! Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  

// function romanNumeralize(num, rm = '') {

//     let nums = {1: "I", 2: 'II', 3: "III", 4: 'IV', 5: 'V', 6: 'IV', 7: "VII", 8: "VIII", 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'}
    

//     if (num <= 10) {
//         return num === 10 ? rm += 'X' : rm += nums[num];        
//     }
//     if (num >= 1000) {
//         return num === 1000 ? rm += 'M' : romanNumeralize(num - 1000, rm += 'M'); 
//     }
//     if (num >= 900) {
//         return num === 900 ? rm += 'CM' : romanNumeralize(num - 900, rm += 'CM');
//     }
//     if (num >= 500) {
//         return num === 500 ? rm += 'D' : romanNumeralize(num - 500, rm += 'D');
//     }
//     if (num >= 400) {
//         return num === 400 ? rm += 'CD' : romanNumeralize(num - 400, rm += 'CD') 
//     }
//     if (num >= 100) {
//         return num === 100 ? rm += 'C' : romanNumeralize(num - 100, rm += 'C') 
//     }
//     if (num >= 90) {
//         return num === 90 ? rm += 'XC' : romanNumeralize(num - 90, rm += 'XC') 
//     }
//     if (num >= 50) {
//         return num === 50 ? rm += 'L' : romanNumeralize(num - 50, rm += 'L') 
//     }
//     if (num >= 40) {
//         return num === 40 ? rm += 'XL' : romanNumeralize(num - 40, rm += 'XL') 
//     }
//     if (num >= 10) {
//         return num === 10 ? rm += 'X' : romanNumeralize(num - 10, rm += 'X') 
//     }
// }    


// romanNumeralize(1973) /*?*/ // 'MCMLXXIII'
// romanNumeralize(3) /*?*/ // 'III'
// romanNumeralize(19) /*?*/ // 'XIX'
// romanNumeralize(11) /*?*/ // XI) 
// romanNumeralize(22) /*?*/// XXII 
// romanNumeralize(1000) /*?*/ // M 
// romanNumeralize(1001) /*?*/ // MI 
// romanNumeralize(1990) /*?*/ // MCMXC 
// romanNumeralize(2007) /*?*/ // MMVII 
// romanNumeralize(2008) /*?*/ // MMVIII 
// romanNumeralize(59) /*?*/ // LIX 
// romanNumeralize(95) /*?*/ // XCV 
// romanNumeralize(50) /*?*/ // L 
// romanNumeralize(45) /*?*/ // XLV 
// romanNumeralize(591) /*?*/ // DXCI 
// romanNumeralize(985) /*?*/ // CMLXXXV 
// romanNumeralize(519) /*?*/ // DXIX 
// romanNumeralize(487) /*?*/ // CDLXXXVII 
// romanNumeralize(919) /*?*/ // CMXIX 
// romanNumeralize(999) /*?*/ //CMXCIX


// Good morning! Today you will write a function which takes a positive integer number as an argument and returns it's "Collatz chain". The Collatz chain will stop at one.

// Named after Lothar Collatz, the "Collatz conjecture" defines a sequence of numbers. That sequence is the Collatz "chain". Starting with a positive integer, the Collatz conjecture determines the next integer in the chain until the number 1 is obtained.

// Your Collatz algorithm will evaluate the integer and then, depending on the condition of the integer, perform the following tasks:

// If the integer is even, then halve the number.
// If the integer is not even, then multiply it by 3 and add one.

// An example chain starting from the number 23 looks like this:

// [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]

// Boldface signifies the odd numbers

// Your function should behave like this:

// function collatzSequence(num, ar = [num]) {
//     if (num === 1) return ar;
//     ar.push(next = num % 2 === 0 ? num / 2 : num *3 + 1)
//    return collatzSequence(next, ar)    
// }

// collatzSequence(23) /*?*/ // [ 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]

const vowelcount = str =>str.match(/[aeiou]/gi).length


vowelcount('aeiou') /*?*/ // 5
vowelcount('All I have ever wanted is to be an Uber driver!') /*?*/ // 16
vowelcount('ae') /*?*/ // 2