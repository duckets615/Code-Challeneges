const evenLast = numbers => numbers.filter(ele => ele % 2 === 0).map(ele => ele * numbers[numbers.length-1]).reduce((a,b) => a += b)

// function evenLast(numbers) {
//     let last = numbers[numbers.length-1];
//     return numbers.filter(ele => ele % 2 === 0).map(ele => ele * last).reduce((a,b) => a += b);    
// }



console.log(evenLast([2,3,4,5]));
