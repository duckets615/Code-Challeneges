// Write a function that returns true if two arrays, when combined, form a consecutive sequence.
//  note, a consecutive sequence is not restricted to an incriment of 1,  2,4,6 is a consecutive sequence b/c
//  the increment is uniformed throughout the array

//  ex  [1,3,5] [2,4] 

// function consecutiveCombo(ar1, ar2) {
//     let ar3 = ar1.concat(ar2).sort((a,b) => a - b)
//     for (let i = 1; i < ar3.length; i++) {
//         if (ar3[i] - 1 !== ar3[i-1]) return false;
//     }   
//     return true;
// }

function consecutiveCombo(ar1, ar2) {   
    var newArr = ar1.concat(ar2);
     newArr.sort((a, b) => a - b);
     for(i = 1; i < newArr.length; i++){
       if(newArr[i] - newArr[i-1] === newArr[i+1] - newArr[i]){
           return true;
    }
    }
 }

consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) /*?*/ // ➞ true
consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) /*?*/ //➞ false
consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) //➞ false
consecutiveCombo([2, 4, 6], [1, 3, 5, 8, 10]) //➞ false
consecutiveCombo([2, 4, 6], [1, 3, 5]) //➞ true





