// camelCasingDash;

// Write a function that will take in a string and return a new string
// with all spacing, dashes, and underscores removed. All letters 
// should be in lowercase excluding the first word.
// of each word capitalized excluding the first word

//ex.  'lambda-coDIng_sCHOol' => 'lambdaCodingSchool';

const camelCasingDash = str => str.split(/[-_ ]/).map((ele, i) => i === 0 ? ele = ele.toLowerCase() : ele[0].toUpperCase() + ele.slice(1).toLowerCase()).join('');



//camelCasingDash('lambda-coDIng_sCHOol')// lambdaCodingSchool

//camelCasingDash('mike huNter-jose_LEI BRYCe_Greg-riCH')// mikeHuNterJoseLeiBryceGregRich


// camelCasingDashModified;

// Write a function that will take in a string with all words separated
// by either a dash, an underscores or a space. return a string with all dashes, underscores and spaces
// spaces removed. The first letter of each word must be capitalized while all others must be lowercase
// when returned 

//ex.  'lambda-coDIng_sCHOol' => 'LambdaCodingSchool';

// tip:  regEx can be used with split;

// function camelCasingDash(str) {
//     // code here
// }

// console.log(camelCasingDash('lambda-coDIng_sCHOol'))  // LambdaCodingSchool 
// console.log(camelCasingDash('huNter-Chris_LEI STACy vAN'))  // HunterChrisLeiStacyVan

// const camelCasingDash = str => str.split(/[-|_| ]/).map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()).join('');


// function camelCasingDash(str) {    
//     let newstr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '_' || str[i] === '-' || str[i] === ' ') {
//             continue;
//         } else if (str[i-1] === '-' || str[i-1] === '_' || str[i-1] === ' ') {
//             newstr += str[i].toUpperCase();
//         } else {
//             newstr += str[i].toLowerCase();
//         }            
//     }
//     return newstr;    
// }



const DistinctList = arr => arr.length - Array.from(new Set(arr)).length 

const DistinctList = arr => arr.length - new Set(arr).size 

function DistinctList(arr) {
    let ori = [];
    for (let i = 0; i < arr.length; i++) {
            if (ori.indexOf(arr[i]) === -1) ori.push(arr[i]);
        }
        return arr.length - ori.length
}
        
        
        
        
        
        
        
        
        
        
        
// Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.

// tip: the Set object can help solve this one.
        
    function DistinctList(arr) {
        // code here
    }
        
console.log(DistinctList([0,-2,-2,5,5,5]))  //3
console.log(DistinctList([100,2,101,4]))  //0
console.log(DistinctList([0,-2,-2])) // 1
console.log(DistinctList([1,2,2,2,3])) // 2
console.log(DistinctList([1,2,2,2,2,2,3])) // 4
console.log(DistinctList([5,5,5,5,5,5,5,7])) // 6
console.log(DistinctList([0,0,0,0])) // 3
console.log(DistinctList([1,2,3,4,5,6,7,7])) // 1
        




// write a funciton that takes in an array and returns the difference of the highest value
//and lowest value

function hiLow(array) {

}

hiLow([1,2,3]) // 2
hiLow([10,20,30]) // 20
