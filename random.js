// //const hackerSpeak = str => str.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5);

// function hackerSpeak(str) {
//     let obj = {a: 4, e: 3, i: 1, o: 0, s: 5}
//     return str.replace(/[aeios]/gi, letter => obj[letter])
// }

// hackerSpeak('programming is fun') /*?*/

//function MeanMode(arr) {
    // let avg = arr.reduce((acc, cur) => acc + cur)/arr.length;
    // let sorted = arr.sort((a,b) => arr.filter(a => a).length - arr.filter(b => b))[0];
    // return avg === sorted ? 1 : 0;
    //return arr.reduce((acc, cur) => acc + cur)/arr.length === arr.sort((a,b) => arr.filter(a => a).length - arr.filter(b => b))[0] ? 1 : 0    
//}

// const MeanMode = arr => arr.reduce((acc, cur) => acc + cur)/arr.length === arr.sort((a,b) => arr.filter(a => a).length - arr.filter(b => b))[0] ? 1 : 0


// function ArithGeo(ar) {
//     let arith = [], geo = [];
//     ar.map((el, i) => ar[i+1] !== undefined ? arith.push(ar[i+1] - el) : i = i)
//     if (Array.from(new Set(arith)).length === 1) return `Arithmetic`
//     ar.map((el, i) => ar[i+1] !== undefined ? geo.push(ar[i+1] / el) : i = i)
//     if (Array.from(new Set(geo)).length === 1) return `Geometric`
//     return -1;
// }


// ArithGeo([5,10,15]) /*?*/ // Arithmetic
// ArithGeo([4,8,12,16]) /*?*/ // Arithmetic
// ArithGeo([2,4,16,24]) /*?*/ //-1
// ArithGeo([1, 2, 4, 8, 16, 32, 64, 128, 256]) /*?*/ //-1
// ArithGeo([1,2,3,4,5,10,20]) /*?*/ //-1
// ArithGeo([1,2,3,4,5,6,7,88,2]) /*?*/ //-1
// ArithGeo([10,110,210,310,410,511]) /*?*/ //-1


// //  Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N is encountered remove the next character from the string (then remove the N). All other characters in the string will be lowercase letters. For example: "abcNdgM" should return "abcgg". The final string will never be empty.
                    
// function StringChanges(str) {
//     let ar = str.split('');
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i].match(/M/)) ar[i] = ar[i - 1]        
//     }
//     return ar.filter(char => char !== 'N').join('');
// }
                    


// StringChanges("MrtyNNgMM") /*?*/ //rtyggg
// StringChanges("oMoMkkNrrN") /*?*/ //ooookkr
// StringChanges("abcNdgM")  /*?*/ //// abcgg
// StringChanges("MrtyNNg")  /*?*/ //// rtyg
// StringChanges("oMoMkkNrrN")  /*?*/ //// ooookkr
// StringChanges("MMMMMokM")  /*?*/ //// okk
// StringChanges("MMMMMokN") /*?*/ //// ok
// StringChanges("MNMNjMa")  /*?*/ //// a
// StringChanges("zzzMMMa")  /*?*/ //// zzzzzza
// StringChanges("MrtyNNgMM") /*?*/ //// rtyggg

// Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// Sample Test Cases
// function ArrayAddition(arr) { 
//     let max = arr.sort((a,b) => b - a)[0];
//     max;
    
// }

// Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.

// const DistinctList = arr => arr.length - Array.from(new Set(arr)).length 

// const DistinctList = arr => arr.length - new Set(arr).size 

// function DistinctList(arr) { 
//     let dupes = [];
//     let uni = [];
//     for (let i = 0; i < arr.length; i++) {
//         uni.indexOf(arr[i]) === -1 ? uni.push(arr[i]) : dupes.push(arr[i]);
//     }        
//     return dupes.length;
// }

// DistinctList([0,-2,-2,5,5,5]) /*?*/ //3
// DistinctList([100,2,101,4]) /*?*/ //0
// DistinctList([0,-2,-2]) /*?*/// 1
// DistinctList([1,2,2,2,3]) /*?*/// 2
// DistinctList([1,2,2,2,2,2,3]) /*?*/// 4
// DistinctList([5,5,5,5,5,5,5,7]) /*?*/// 6
// DistinctList([0,0,0,0]) /*?*/// 3
// DistinctList([1,2,3,4,5,6,7,7]) /*?*/// 1


// Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.
// Sample Test Cases
// function RectangleArea(str) {    
//     let x = [], y = [];
//     str.map(cor => {
//         x.push(cor[1] === '-' ? +cor[2] : +cor[1])
//         y.push(cor[3] === '-' ? +cor[4] : +cor[3])        
//      });          
//     let length = Array.from(new Set(x));
//     let height = Array.from(new Set(y));     
//     return length.length === 2 ? Math.abs(length[0] - length[1]) * Math.abs(height[0] - height[1]) : 0;
// }

// RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]) /*?*/ // 4
// RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]) /*?*/ // 1
// RectangleArea(["(-1 -1)","(0 0)","(-1 0)","(0 -1)"]) /*?*/ // 1
// RectangleArea(["(-2 -2)","(0 0)","(-2 0)","(0 -2)"]) /*?*/ // 4
// RectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"]) /*?*/ // 0


// Have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.
// Sample Test Cases

// function HammingDistance(strArr) { 
//     let one = strArr[0], two = strArr[1], count = 0;
//     for (let i = 0; i < one.length; i++) {
//         if (one[i] !== two[i]) count++;
//     }
//     return count;  
// }

// const HammingDistance = strArr => strArr[0].split('').filter((num,i) => num !== strArr[1][i]).length;    

//   HammingDistance(["10011", "10100"]) /*?*/ // 3
//   HammingDistance(["helloworld", "worldhello"]) /*?*/ // 8

// const hamming = (a,b) => a.split('').filter((num,i) => num !== b[i]).length;  

// hamming("I like turtles","I like turkeys")/*?*/  //returns 3
// hamming("Hello World","Hello World") /*?*/ //returns 0

/////   ******     ///////

// const AdditivePersistence = (num, count = 0) => num < 10 ? count : AdditivePersistence(num.toString().split('').map(el => +el).reduce((acc,cur) => acc + cur), count += 1)
  

//   AdditivePersistence(4) /*?*/ // 0
//   AdditivePersistence(19) /*?*/// 2

//////    ******     //////

// Have the function LargestFour(arr) take the array of integers stored in arr, and find the four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21, so your program should return 21. If there are less than four numbers in the array your program should return the sum of all the numbers in the array.

// const LargestFour = arr => arr.sort((a,b) => b - a).filter((num, i) => i < 4).reduce((acc,cur) => acc + cur)     
// LargestFour([1, 1, 1, -5]) /*?*/ // -2
// LargestFour([0, 0, 2, 3, 7, 1]) /*?*/ // 13

// Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, and determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. If so, return the string true, otherwise return the string false. For example: if str is "6539923335" then your program should return the string true because there is a consecutive stream of 3's of length 3. The input string will always contain at least one digit.

// function NumberStream(str) { 
//     for (let i = 0; i < str.length; i++) { 
//         if (str[i] === str[i-1]) continue;
//         let start = i;
//         let end = i + +str[i];
//         let target = str[i] ** 2;
//         let seq = str.slice(start, end).split('').map(num => +num).reduce((acc,cur) => acc + cur);
//         if (seq === target) return true;
//         seq = [];
//     }
//     return false;
// }
// NumberStream("5556293383563665")/*?*/ //false
// NumberStream("5788888888882339999") /*?*/ // true



// 1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
// 2. The first set of digits must add up to an even number.
// 3. The second set of digits must add up to an odd number.
// 4. The last digit in each set must be larger than the two previous digits in the same set.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "224.315.218" then your program should return "true".

// function SerialNumber(str) {
//     let ar = str.split('.');
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i].length < 3) return false;
//         if (ar[i][2] < ar[i][1] || ar[i][2] < ar[i][0]) return false;
//         if (ar[0].split('').map(num => +num).reduce((acc,cur) => acc + cur) % 2 !== 0) return false;
//         if (ar[1].split('').map(num => +num).reduce((acc,cur) => acc + cur) % 2 === 0) return false;
//     }
//     return true;
//   }

// SerialNumber("11.124.667") /*?*/ // false;
// SerialNumber("114.568.112") /*?*/ // true;



// Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, single-digit integers occur within each word in the string. The integers can appear anywhere in the word, but they cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it, then return the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" but if the string is "hell268o w6or2l4d" then your program should return "false" because all the integers are adjacent to each other in the first word.
// Sample Test Cases

// function ThreeNumbers(str) { 
//     let ar = str.split(' '), Length = ar.length, count = 0;
//     for (let i = 0; i < Length; i++) {
//         if (count === 3) return true;
//         count = 0;
//         for (let j = 0; j < ar[i].length; j++) {
//             let cur = ar[i][j];
//             let next = ar[i][j+1];
//             let prev = ar[i][j-1];

//             if (cur.match(/[0-9]/)) {
//                 if (prev === undefined || !prev.match(/[0-9]/)) {
//                     if (next === undefined || !next.match(/[0-9]/)) count++;
//                 } else {
//                     continue;
//                 }
//             } else {
//                 continue;
//             }
//         }
//     }
//     return false;
// }


// ThreeNumbers("2a3b5 w1o2rl3d g1gg92") /*?*/ // true
// ThreeNumbers("21aa3a ggg4g4g6ggg") /*?*/ // false

// function canAlternate(s) {
// 	let one = s.split('').filter(num => num === 0).length;
// 	let two = s.split('').filter(num => num === 1).length;
// 	return Math.abs(one - two === 1)
// }
// const canAlternate = s => Math.abs(s.split('').filter(num => +num === 0).length - s.split('').filter(num => +num === 1).length) < 2;

// canAlternate("0001111") /*?*/ // true)
// canAlternate("01001") /*?*/ // true)
// canAlternate("010001") /*?*/ // false)
// canAlternate("0100110111") /*?*/ // false)
// canAlternate("10101010") /*?*/ // true)
// canAlternate("010101000") /*?*/ // false)
// canAlternate("0111") /*?*/ // false)
// canAlternate("00") /*?*/ // false)
// canAlternate("1111") /*?*/ // false)
// canAlternate("101") /*?*/ // true)

// Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.

// function SumMultiplier1(arr) { 
//         let target = arr.reduce((acc,cur) => acc + cur) * 2;
//         for (let i = 0; i < arr.length; i++) {
//                 for (let j = i + 1; j < arr.length; j++) {
//                         if (arr[i] * arr[j] > target) return true;
//                     }
//                 }
//                 return false;           
//             }

// function SumMultiplier(arr) { 
//     let sorted = arr.sort((a,b) => b - a);
//     return sorted[0] * sorted[1] > arr.reduce((acc,cur) => acc + cur) * 2;
// }
// SumMultiplier([2, 2, 2, 2, 4, 1]) /*?*/ // false
// SumMultiplier([1, 1, 2, 10, 3, 1, 12]) /*?*/ // true
// SumMultiplier([4, 5, 5, 5, 12]) /*?*/ // false.


// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function PrimeMover(num) {
//     let primes = [];
//     for (let i = 2; primes.length < num; i++) {
//         if (isPrime(i)) primes.push(i)
//     }
//     return primes[num-1];
// }

// PrimeMover(9) /*?*/ // 23
// PrimeMover(100) /*?*/ // 541
// PrimeMover(1) /*?*/ // 2
// PrimeMover(2) /*?*/ // 3
// PrimeMover(3) /*?*/ // 5
// PrimeMover(100) /*?*/ // 541
// PrimeMover(400) /*?*/ // 2741
// PrimeMover(565) /*?*/ // 4099
// PrimeMover(312) /*?*/ // 2069
// PrimeMover(567) /*?*/ // 4127
// PrimeMover(90) /*?*/ // 463
// PrimeMover(16) /*?*/ //53

function DashInsertII(num) { 
    let ar = num.toString().split('');
    ar 
    for (let i = 0; ar.length; i++) {
        if (+ar[i] % 2 === 0 && +ar[i+1] % 2 === 0) ar.splice(i,0,'*');
        if (+ar[i] % 2 !== 0 && +ar[i+1] % 2 !== 0) ar.splice(i,0,'-');
    }
    return ar
}

DashInsertII(99946) /*?*/ // 9-9-94*6
DashInsertII(56647304) /*?*/ // 56*6*47-304
