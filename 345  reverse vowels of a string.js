// //  Write a function that takes a string as input and reverse only the vowels of a string.

function reverseVowels(str) {

}
 
console.log(reverseVowels('hello')) 
                        // hollie

// reverseVowels('leetcode') 
//                         // leotcede




/*   
 Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least 

two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending 

order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. 

Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine 

on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed 

until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: 

(1) 5432 - 2345 = 3087, 
(2) 8730 - 0378 = 8352, 
(3) 8532 - 2358 = 6174  

*/

//  XX if num < 4 digits add zeros;  use callback
//  XX sort number a-b
//  XX create reverse number b-a
//  XX run op if not 6174 count++ and repeat
//  XX if target hit return count;



//     function digits(num) {
//         if (num.toString().length === 4) return num;
//         if (num.toString().length === 3) return +(num.toString() + '0');
//         if (num.toString().length === 2) return +(num.toString() + '00');
//         if (num.toString().length === 1) return +(num.toString() + '000');     
//     }
    
//     function KaprekarsConstant(num) {
//         let count = 0;
//         let newNum = digits(num);
//         while (count < 4) {
//             let asc = +(newNum.toString().split('').sort((a,b) => a - b).join(''));
//             let desc = +(newNum.toString().split('').sort((a,b) => b - a).join(''));
//             let target = desc - asc;
//             if (target === 6174) {
//                 count++;
//                 return count;
//             } else {
//                 count++
//                 newNum = digits(target);
//             }
//         }
//         return `This shouldn't have been returned something went wrong`
//     }

// console.log(KaprekarsConstant(3254));

