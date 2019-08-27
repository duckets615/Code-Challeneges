/*
Given an array of of letters and numbers, return a string with the letters repeating the same number of times
 as the number following it. exclude the numbers from your string
  ex. ['a', 1, 'b', 2, 'c', 3] => abbccc;
  ex. ['e', 2, 'z', 4, 't', 1] => eezzzzt;
  */
 
 //     let string = '';
 //     for (let i = 0; i < array.length; i += 2) {
   //          string += array[i].repeat(array[i+1])    
   //     }
   //     return string
   // }
   
  //  const letterRepeat = array => array.map((ele, i) => typeof ele === 'string' ? ele = ele.repeat(array[i+1]) : ele = '').join('');
  //  Given an array of of letters and numbers, return a string with the letters repeating the same number of times
  //  as the number following it. exclude the numbers from your string
  //  ex. ['a', 1, 'b', 2, 'c', 3] => abbccc;
  //  ex. ['e', 2, 'z', 4, 't', 1] => eezzzzt;
  //  */
 function letterRepeat(array) {
 } 
console.log(letterRepeat(['a', 1, 'b', 2, 'c', 3])) //=> abbccc;
console.log(letterRepeat(['e', 2, 'z', 4, 't', 1])) //=> eezzzzt;

// copy and paste into editor so notes aren't jumbled
// const letterRepeat = array => array.map((ele, i) => typeof ele === 'string' ? ele = ele.repeat(array[i+1]) : ele = '').join('');
// /*                                     ^               ^                                  ^                     → → ↓  |     ↑
//                                    iterate| |determine datatype(# or letter?)| |if letter rpt method i+1 # of times| ↓ | join into string.
//                                                                                             had to use ternary to make it 1 line but need an else to work
//                                                                                             so set false to some arbitry statment i = i or something
// */


  
      // Challenge
      // Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.
      


// function NumberSearch(str) {
//   if(str.match(/\d+/g) === null) {
//     return 0;
//   } else {
//   let testCase = str.match(/\d+/g).map(Number).reduce((a, c) => a + c); /*?*/
//   let testCase2 = str.match(/[^0-9]/g).length;
//   console.log(Math.round(testCase / testCase2));
//   }
// }

// function NumberSearch(str) {
//   if(str.match(/\d+/g) === null) {
//     return 0;
//   } else {
//   let testCase = str.match(/\d+/g).map(Number).reduce((a, c) => a + c); /*?*/
//   let testCase2 = str.match(/[^0-9]/gi).length; /*?*/
//   console.log(Math.round(testCase / testCase2));
//   }
// }
const NumberSearch = str => {
str = str.replace(/[^\w]/g, "");

const num = [];
let alphaCount = 0;

for (el of str) {
if (typof el === number) num.push(parseInt(el));
else count+=1;
}

return Math.round(sum(num)/count);
}


// NumberSearch( "Two Houses") /*?*/ // 0 works
NumberSearch( "i love cake 9 8 7") /*?*/ // 3 returns 2
NumberSearch( "3ko6") /*?*/ // 5 works
NumberSearch( "1p2ol5e ** 6") /*?*/ // 4 returns 2
// NumberSearch("H3ello9-9") /*?*/ // 4 works
// NumberSearch("One Number*1*") /*?*/ // 0 works