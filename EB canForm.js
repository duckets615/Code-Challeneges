// Write a function that returns true if all the strings in an array can be formed by using only the characters from the longest string.

// ["mast", "manifest", "met", "fan"] => longest string : manifest =>  can mast, met, fan be spelled with only the letters from longest string? yes

function canForm(arr) {
    let long = arr.sort((a,b) => b.length - a.length)[0];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let copy = long.slice(0)
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (!copy.includes(char)) {
                return false;
            } else {
                let idx = copy.indexOf(char);
                copy = copy.slice(0,idx) + copy.slice(idx + 1);                
            }
        }
    }
    return true;
}


//console.log(canForm(["mast", "manifest", "met", "fan"]))//  true
//console.log(canForm(["may", "master", "same", "reams"]))//  false
//console.log(canForm(["may", "same", "reams", "mastery"]))//  true
console.log(canForm(["monument", "momento", "moment", "tome"])) // false