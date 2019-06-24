// Unique Character Mapping
// Write a function that returns a character mapping from a word.

function characterMapping(str) {
    let repeat = [];
    let map = [];
    for (let i = 0; i < str.length; i++) {
        if (repeat.indexOf(str[i]) === -1) {
            repeat.push(str[i]);
            map.length === 0 ? map.push(0) : map.push(Math.max(...map) + 1)
        } else {
            map.push(repeat.indexOf(str[i]))
        }
    }
    return map    
}

console.log(characterMapping("abcd"))// ➞ [0, 1, 2, 3]
console.log(characterMapping("abb"))// ➞ [0, 1, 1]
console.log(characterMapping("babbcb"))// ➞ [0, 1, 0, 0, 2, 0]
console.log(characterMapping("hmmmmm"))// ➞ [0, 1, 1, 1, 1, 1]