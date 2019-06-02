// Letter Count
 /* 
    Have the function LetterCount(str) take the str parameter being passed and return the first word with the 
    greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest 
    because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with 
    repeating letters return -1. Words will be separated by spaces.
*/


function LetterCount(str) {
    let maxChar = 0, maxwWord, count = 0;
    let ar = str.split(' ');
    for (let i = 0; i < ar.length; i++) {
        let word = ar[i];
        for (let j = 0; j < word.length; j++) {
            count = 0;
            let char = word[j];
            for (let t = 0; t < word.length; t++) {
                let char2 = word[t];
                if (char.toLowerCase() === char2.toLowerCase()) count++;
            }
            if (count > maxChar) {
                maxWord = word;
                maxChar = count;
            }
        }
    }
    return maxChar > 1 ? maxWord : -1;
}

console.log(LetterCount("Hello apple pie"))
console.log(LetterCount("a b c d ee"))
console.log(LetterCount("I lied before"))
console.log(LetterCount("The dog and cat"))
console.log(LetterCount("letters galore"))
console.log(LetterCount("coderbyte"))
console.log(LetterCount("No words here"))