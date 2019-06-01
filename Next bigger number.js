// function nextBig(num){
//     let str = num.toString().split('');
//     let length = str.length;
//     for (let i = 0; i < length; i++) {
//         let end = str.pop();
//         str.unshift(end);
//         let newNum = +str.join('');
//         if (newNum > num) return newNum;       
//     }
//     return -1

// };

function nextBig(num){
    let max = +num.toString().split('').sort((a,b) => b - a).join('');
    if (num.toString().length === 1) return -1;
    if (num.toString().length === 2 || num === max) return max;
    for (let i = 0; i < num; i++) {
      let current = +num.toString().split('').pop()
      console.log(current);     
    }       
}
console.log(nextBig(12));
console.log(nextBig(513));

