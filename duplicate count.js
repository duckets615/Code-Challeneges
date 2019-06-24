//const maxedOut = (arr, max) => arr.map(ele => ele ** 3).reduce((total, value) => total += value) > max ? `You've pushed me to the max!` : arr.reduce((total, value) => total += value) 
//const maxedOut= arr => arr.map(ele => ele ** 3).reduce((value, total) => total += value) <= Number.MAX_SAFE_INTEGER ? arr.map(ele => ele ** 3).reduce((value, total) => total += value) : `You'be pushed me to the max!`;
const maxedOut = arr => arr.reduce((total, value) => total += value**3) > Number.MAX_SAFE_INTEGER ? `You'be pushed me to the max!` :  arr.reduce((total, value) => total += value**3)


    


console.log(maxedOut([1,2]));
console.log(maxedOut([-530,230,5600,40,5,7200]));
console.log(maxedOut([7600,32300,66700,22200,4554,323000,5555]));



