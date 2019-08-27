// Write a function called sequencer that will take in an array of integers and determine if the values are in a arithmatic or geometric sequence.  
// In a arithmetic sequence the difference between one number and the next is constant. 
//  (1,2,3,4,5) every # is incrimented by 1
//  (3,6,9,12) every # is incrimented by 3 
// In a Geometric Sequence each term is found by multiplying the previous term by a constant.
// (1,2 4,8,16,32,64,128) Every number is found by multiplying the prev # (except the first) by 2 

// if the given array is arranged in a arithmatic sequence your function should return 'Arithmatic Sequence'
// if the given array is arranged in a geometric sequence your function should return 'Geometric Sequence'
// if the given array sastify neither conditions return 'No Sequence Possible'

//function sequencer(ar) {
//     function sequencer(ar) {
//         let arith = [], geo = [];


//         let dif = ar[1] - ar[0];
//         let div = ar[1] / ar[0] 
        
        
//         for (let i = 1; i < ar.length; i++) {
//             ar[i] - ar[i-1] === dif ? arith.push(true) : arith.push(false);
//             ar[i] / ar[i-1] === div ? geo.push(true) : geo.push(false); 
//         }
//         arith /*?*/
//         geo /*?*/
//         if (!arith.includes(false)) return 'Arithmatic';
//         if (!geo.includes(false)) return 'Geometric';
//         return `no sequence`
//     }
//     // code here


//  sequencer([5,10,15]) /*?*/  // "Arithmetic Sequence"
//  sequencer([2,4,16,24])  /*?*/ // 'No Sequence Possible'
//  sequencer([1, 2, 4, 8, 16, 32, 64, 128, 256]) /*?*/    // 'Geometric Sequence'


// arith([5,10,15]) /*?*/ // "Arithmetic"
// arith([2,4,16,24]) /*?*/ // -1 
// arith([1, 2, 4, 8, 16, 32, 64, 128, 256]) /*?*/ // -1 




//  create the function wordFinder which will take in an array of two elements. The first element will be a sequence of characters and the second will a string of comma separated words which will act as a dictionary. The result of the function will determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided. Your program should return the two words that exist in the dictionary separated by a comma.

//  ex ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]    split the word between o and c and u get 'hello' 'cat', both words are in the dictionary so your function should return 'hello', 'cat'.

// If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.

// function wordFinder(strArr) { 
//     // code here
// }

//  wordFinder(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])   // "base, ball"
//  wordFinder(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])  // "abcg, efd"


// function WordSplit(strArr) { 
//     let dictionary = strArr[1].split(',');
//     for (let i = 0; i < strArr[0].length; i++) {
//         let word1 = strArr[0].slice(0,i);
//         let word2 = strArr[0].slice(i);
//         if (dictionary.indexOf(word1) !== -1 && dictionary.indexOf(word2) !== -1) return `${word1}, ${word2}`
//     }
//     return `not possible`
// }

// WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]) /*?*/  //"base, ball"

// WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]) /*?*/ // "abcg, efd"

// Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark.
// 4. It cannot have the word "password" in the string.
// xx 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".


// function SimplePassword(str) { 
//     if (str.length > 31 || str.length < 7) return false;
//     if (!str.match(/[0-9]/g)) return false
//     if (!str.match(/[A-Z]/g)) return false
//     if (str.match(/password/gi)) return false;
//     return true;
// }
 

                    
// SimplePassword("passWord123!!!!") /*?*/ // false
// SimplePassword("turkey90AAA=") /*?*/ // true
// SimplePassword("tAA=") /*?*/ // true
// SimplePassword("123456A+") /*?*/ // true
// SimplePassword("!!!!!!+++++++++AMAMAM9") /*?*/ // true.

// Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters representing a word, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the minimum number of characters, if any, can be removed from the word so that it matches one of the words from the dictionary. In this case, your program should return 2 because once you remove the characters "c" and "e" you are left with "world" and that exists within the dictionary. If the word cannot be found no matter what characters are removed, return -1.


// function CharacterRemoval(ar, count = 0) {
    
// }

// CharacterRemoval(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]) /*?*/ // 4
// CharacterRemoval(["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]) /*?*/  // 8


// Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

// For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

// Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.


// let obj1 ={
//     "a": 7,
//     "z": 4,
//     "e": 2
// }

// function sortObject(o) {
//     return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
// }
// sortObject(obj1) /*?*/

// function GroupTotals(ar) {
//     let newstr = ``;
//     let obj = {};
//     for (let i = 0; i < ar.length; i++) {
//         let key = ar[i][0];
//         let value = +ar[i].slice(2)
//         obj[key] === undefined ? obj[key] = value : obj[key] += value         
//     }
//     for (let k in obj) {
//         if (obj[k] === 0) delete obj[k];
        
//     }
//     obj.keys /*?*/
//     return Array.from(sortObject(obj)) /*?*/     
// }

// function GroupTotals(ar) {
//     let newstr = ``;
//     let obj = {};
//     for (let i = 0; i < ar.length; i++) {
//         // let key = ar[i][0];
//         // let value = +ar[i].slice(2)
//         // obj[key] === undefined ? obj[key] = value : obj[key] += value         
//         ar.map(el => obj[el] === undefined? obj[el] = ar[i].slice(2) : obj[el] += ar[i].slice(2)) 
//     }
//     for (let k in obj) {
//         if (obj[k] !== 0) {
//             newstr += ` ${k}:${obj[k]} `;
//         }
//     }
//     return newstr.split(',').join('')/*?*/    
// }    
        
//GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]) /*?*/ // "B:3,Y:1"
//GroupTotals(["Z:0", "A:-1"]) /*?*/ // "A:-1"


// Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.
// Sample Test Cases

// function operation(str) {    
//     if (str.includes('-')) return `subtraction`
//     if (str.includes('+')) return `addition`
//     if (str.includes('/')) return `division`
//     if (str.includes('x')) return `multiplication`
//     return `problem`
// }

// function subtraction(str, xresult) {
//     if (xresult === true) return str.reduce((acc,cur) => acc - cur);        
//     str.reduce((acc,cur) => acc - cur) /*?*/        
//     return str.reduce((acc,cur) => acc + cur);    
// }

// function addition(str, xresult) {
//     if (xresult === true) return str.reduce((acc,cur) => acc + cur);
//     return str[1] - str[0];
// }

// function division(str, xresult) {
//     if (xresult === true) return str[0] / str[1];
//     return str[0] / str[1];
//     }


// function multiplication(str, xresult) {
//     if (xresult === true) return str[0] * str[1];
//     return str[1] / str[0];
// }

// function MissingDigit(str) {
//     let xnum = str.split(' ').filter(num => num.includes('x')).join('')
//     let op = operation(str), xresult = false; answer = 0;
//     if (str.indexOf(str.match(/x/g)) > str.indexOf('=')) xresult = true

//     if (xresult === true) {    
//         let prob = str.slice(0, str.indexOf('=')).split(' ').filter(el => el.match(/[0-9]/)).map(el => +el);
//         prob
//         multiplication(prob) /*?*/
//         if (op === 'subtraction') answer = subtraction(prob, true).toString()
//         if (op === 'addition') answer = addition(prob, true).toString()
//         if (op === 'division') answer = division(prob, true).toString()
//         if (op === 'multiplication') answer = multiplication(prob, true).toString()    
//     } else {
//         let prob = str.split(' ').filter(el => !el.includes('x')).filter(num => num.match(/[0-9]/)).map(num => +num);   
//         if (op === 'subtraction') answer = subtraction(prob, false).toString()
//         if (op === 'addition') answer = addition(prob, false).toString()
//         if (op === 'division') answer = division(prob, false).toString()
//         if (op === 'multiplication') answer = multiplication(prob, false).toString()    
//     }
//     let x = xnum.indexOf('x');
//     return xnum !== 1 ? answer[x] : 0
// }



//  MissingDigit("3x + 12 = 46") /*?*/ // 4
//  MissingDigit("4 - 2 = x") /*?*/ // 2
//  MissingDigit("1x0 * 12 = 1200") /*?*/ // 0
//  MissingDigit("0 - 0 = x") /*?*/ // 0
//  MissingDigit("4356 * 23 = 1001x8") /*?*/ // 8
//  MissingDigit("24 / x = 12") /*?*/ // 2
//  MissingDigit("1 + 1111 = x112") /*?*/ // 1
//  MissingDigit("10 - x = 10") /*?*/ // 0
//  MissingDigit("900 / 900 = x") /*?*/ // 1
//  MissingDigit("2004 / 6 = 33x") /*?*/ // 4
//  MissingDigit("10 - x = 10") /*?*/ //   

// Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

// If there are no two numbers that sum to the first element in the array, return -1
// Sample Test Cases

// function twoSum(arr) {
//     let target = arr[0]; // target sum
//     let hash = [], pairs = []; Length = arr.length; 
//     for (let i = 1; i < Length; i++) { //  for loop starts at 1 b/c first element is target sum and should be excluded
//         if (hash.indexOf(target - arr[i]) !== -1) { // check if current element is in hash
//             pairs.push(arr[i], target - arr[i]);   // if yes, push current element and target - cur element to pairs       
//         }
//         hash.push(arr[i]) // add the current element to the hash array;
//     }
//     return pairs
//     }
    
//     twoSum([7, 6, 4, 1, 7, -2, 3, 12]) /*?*/ // 6,1 4 ,3
    

    // Challenge
    // Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.
    
   function NumberSearch(str) {
       // code here
   }


NumberSearch( "Two Houses") // 0
NumberSearch( "i love cake 9 8 7") // 3
NumberSearch( "3ko6") // 5
NumberSearch( "1p2ol5e ** 6") // 4
NumberSearch("H3ello9-9") // 4
NumberSearch("One Number*1*") // 0
function NumberSearch(str) { 
    let Length = str.split('').filter(el => el.match(/[A-Z]/gi)).length
    let nums = str.split('').filter(el => el.match(/[0-9]/g)).map(num => +num);
    if (nums.length === 0 || Length === 0) return 0;
    return Math.round(nums.reduce((acc,cur) => acc + cur) / Length)
    
  }
/////////////////////////////////////////////////////////////////////////////////////////////
// Challenge
// Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0.


// function TripleDouble(num1,num2) { 
//     if (num1.toString().length < 2 || num2.toString().length < 2) return 0
//     let num = 0;    
//     for (let i = 0; i < num1.toString().length; i++) {
//         let chop = num1.toString().slice(i,i + 3);
//         if (chop[0] === chop[1] && chop[2] === chop[0]) {            
//             num = chop[0].toString() + chop[1].toString()
//             break;
//         }
//     }
//     if (num === 0) return 0
//     return num2.toString().includes(num) ? 1 : 0
// }

// TripleDouble(465555, 5579) /*?*/ // 1
// TripleDouble(67844, 66237) /*?*/ // 0 
// TripleDouble(556668, 556886) /*?*/ // 0
// TripleDouble(2233334, 3) /*?*/ // 0
  


// // Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

// // Use the Parameter Testing feature in the box below to test your code with different arguments.

// function MultiplicativePersistence(num, count = 0) { 
//     if (num < 10) return count;
//     num = num.toString().split('').map((num => +num)).reduce((acc,cur) => acc *= cur);
//     return MultiplicativePersistence(num, count += 1)
// }


// MultiplicativePersistence(679) /*?*/ // 5
// MultiplicativePersistence(6788) /*?*/ // 6
// MultiplicativePersistence(68889) /*?*/ // 7
// MultiplicativePersistence(2677889) /*?*/ // 8




// function AdditivePersistence(num, count = 0) {     
//     if (num < 10) return count;
//     num = num.toString().split('').map(num => +num).reduce((acc,cur) => acc + cur);
//     return AdditivePersistence(num, count += 1)
// }


// AdditivePersistence(679) /*?*/ //   
// AdditivePersistence(6788) /*?*/ // 
// AdditivePersistence(68889) /*?*/ // 
// AdditivePersistence(2677889) /*?*/ // 

// Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.

// function PrimeChecker(num, end = num.toString().length) {

// }

// PrimeChecker(98) /*?*/ // 1
// PrimeChecker(598) /*?*/ // 1


function time1(t,t2) {
  t.getmin() /*?*/
}


function CountingMinutesI(str) { 
  return str; 
}
// }Input:"12:30pm-12:00am"

// Output:690


// Input:"1:23am-1:08am"

// Output:1425

function PalindromeCreator(str) { 
  for(let i = 0; i < str.length; i++) {
      str.slice(i) /*?*/
      str.slice(i).split('').reverse().join('') /*?*/
      if (str.slice(i) === str.slice(i).split('').reverse().join('')) return str[i];
      for (let j = i + 1; j < str.length; j++) {
        if (str.slice(i).slice(j) /*?*/ === 
        str.slice(i).slice(j).split('').reverse().join('') /*?*/ ) return [str[i], str[j]]  
      
      }
  }
}

//PalindromeCreator("kjjjhjjj"); /*?*/
PalindromeCreator("mmjmmhmm") /*?*/ // jh

