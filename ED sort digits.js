// Create a function that reorders the digits of each numerical element in an array 
// based on ascending (asc) or descending (desc) order.

function reorderDigits(ar,direction) {
    return direction === 'asc' ? ar.map(ele => +(ele.toString().split('').sort((a,b) => a - b)).join('')) : ar.map(ele => +(ele.toString().split('').sort((a,b) => b-a)).join(''))
}




console.log(reorderDigits([515, 341, 98, 44, 211], "asc")) // [155, 134, 89, 44, 112]
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"))// [551, 431, 98, 44, 211]
console.log(reorderDigits([63251, 78221], "asc")) // [12356, 12278]
console.log(reorderDigits([63251, 78221], "desc")) // [65321, 87221]
console.log(reorderDigits([1, 2, 3, 4], "asc"))  // [1, 2, 3, 4]
console.log(reorderDigits([1, 2, 3, 4], "desc"))// [1, 2, 3, 4]