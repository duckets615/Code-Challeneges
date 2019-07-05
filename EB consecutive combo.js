// Write a function that returns true if two arrays, when combined, form a consecutive sequence.


function consecutiveCombo(ar1, ar2) {
    let ar3 = ar1.concat(ar2).sort((a,b) => a - b)
    for (let i = 1; i < ar3.length; i++) {
        if (ar3[i] - 1 !== ar3[i-1]) return false;
    }   
    return true;
}


consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) /*?*/ // ➞ true
consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9])/*?*/ //➞ false
consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])/*?*/ //➞ false