//  coderByte other products

// Have the function OtherProducts(arr) take the array of numbers 
// stored in arr and return a new list of the products of all the 
// other numbers in the array for each element.

// if arr is [1,2,3,4,5] then the first element would be 120 b/c 2*3*4*5 === 120 

// You should generate this new array and then return the numbers as a string 
// in the following format: #-#-#

function otherProducts(ar) {
    let array = [];
    let length = ar.length;
    for (let i = 0; i < length; i++) {
        let copy = ar.slice(0);
        copy.splice(i,1);     
        length - 1 !== i ? array.push(copy.reduce((total, value) => total *= value), '-') : array.push(copy.reduce((total, value) => total *= value));    
    }
    return array.join('');
}

console.log(otherProducts([1,2,3,4,5])) // 
otherProducts([1,4,3]) // 12-3-4
otherProducts([3,1,2,6]) // 12-36-18-6
