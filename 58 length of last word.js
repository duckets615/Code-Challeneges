/*
58 Give a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.
*/


const lengthOfLastWord = s => s.trim().split(' ').pop().length 

console.log(lengthOfLastWord('a'))
console.log(lengthOfLastWord('hello world'))
console.log(lengthOfLastWord('aaa bbbbb'))
