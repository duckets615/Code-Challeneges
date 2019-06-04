// Cesear cypher

// Take a given string and replace all letters with the letter n times behind it
// ex.   n = 3  then  a => d   


// function cesear(str, n) {
//     let newstr = '';
//     let alpha = 'abcdefghijklmnopqrstuvwxyz';   
//      for (let i = 0; i < str.length; i++) {
//         let idx = alpha.indexOf(str[i]);  
//         let newidx = idx + n      
//         newstr += alpha[newidx % 26]       
//     }
//     return newstr;
// }

// function cesear(str,n) {
//     let newstr = '';
//     str.split('').map(ele => {
//         let code = ele.charCodeAt();  
//         let idx = code + n;
//         newstr += String.fromCharCode(idx)   
//         console.log(String.fromCharCode());
//         console.log(127 - 32);
        
//     })
//     return newstr
// };

//cesear('abczdvxzzz', 1)) // def
//cesear('abc', 0) // abc;

