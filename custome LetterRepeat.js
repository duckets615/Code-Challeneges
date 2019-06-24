/*
Given an array of of letters and numbers, return a new string with the letters repeating the same number of times
 as the number following it.
  ex. ['a', 1, 'b', 2, 'c', 3] => abbccc;
  ex. ['e', 2, 'z', 4, 't', 1] => eezzzzt;
  */
 
// function letterRepeat(array) {
//     let string = '';
//     for (let i = 0; i < array.length; i += 2) {
//          string += array[i].repeat(array[i+1])    
//     }
//     return string
// }

const letterRepeat = array => array.map((ele, i) => typeof ele === 'string' ? ele = ele.repeat(array[i+1]) : ele = '').join('');

 
console.log(letterRepeat(['a', 1, 'b', 2, 'c', 3])) //=> abbccc;
console.log(letterRepeat(['e', 2, 'z', 4, 't', 1])) //=> eezzzzt;