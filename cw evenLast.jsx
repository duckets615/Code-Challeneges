// const evenLast = numbers => numbers.filter(ele => ele % 2 === 0).map(ele => ele * numbers[numbers.length-1]).reduce((a,b) => a += b)

// function evenLast(numbers) {
//     let last = numbers[numbers.length-1];
//     return numbers.filter(ele => ele % 2 === 0).map(ele => ele * last).reduce((a,b) => a += b);    
// }



// console.log(evenLast([2,3,4,5]));

function randomString() {
    let str = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i <= 12; i++) {
        let num = Math.ceil(Math.random() * 7);
        let idx = Math.round(Math.random() * 25);
        if (num === 1 && i !== 0) str += '-';
        if (num === 2 && i !== 0) str += ' ';
        if (num > 2 && num < 5) str += alpha[idx].toUpperCase();
        if (num > 5) str += alpha[idx].toLowerCase();                  
    }
    return str;   
}
function checker(str) {
    let cap = [];
    for (let i = 0; i < str; i++) {
        
    }
}




console.log(randomString());



