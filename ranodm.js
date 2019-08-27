// Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
// Sample Test Cases

// function LongestIncreasingSequence(arr) {
//   let count = 0;
//   let long = 0;
// for (let i = 0; i < arr.length; i++) {
//     count = 0;
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[j] > arr[i]) {
//             count++ 
//             if (count > long) long = count;
//     }
// }
// }
// return count
// }


// LongestIncreasingSequence([9, 9, 4, 2]) /*?*/ // 1
// LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]) /*?*/ // 7
// LongestIncreasingSequence([1, 2, 3, 7, 4, 5]) /*?*/ // 5

function QuestionsMarks(str) { 
    if (str.split('').filter(mark => mark === '?').length === 0) return false;
    for (let i = 0; i < str.length; i++)
    if (str.slice(i, i+3) === '???' && typeof +str[i+3] === 'number' && typeof +str[i+3] === 'number') return true;   
    return false;    
}
QuestionsMarks('acc?7??sss?3rr1??????5') /*?*/ //
QuestionsMarks('aadsf5') /*?*/ //
   