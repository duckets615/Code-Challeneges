// In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// There are other ways codes are created, but this challenge will only use the four rules listed above.

// In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the rules above. The function will return an array of codes in the same order in which the input names were presented.

// function birdCode(arr) {
//     return arr.map(word => {
//         word = word.toUpperCase().split(/\s|-/);
//         if (el.length === 1) return el[0].slice(0,4);
//         if (word.length === 2) return word[0].slice(0,2) + word[1].slice(0,2);
//         if (word.length === 3) return word[0].slice(0,1) + word[1].slice(0,1) + word[2].slice(0,2);
//         if (word.length === 4) return word[0].slice(0,1) + word[1].slice(0,1) + word[2].slice(0,2) + word[3].slice(0,2);    
//     })       
// }

// //Jose Montero Jr [8:13 PM]
// function birdCode(arr) {
//  return arr.map(el => {
//   // el = el.includes(' ') ? el.toUpperCase().split(' ') : el.toUpperCase().slice(0,4)
//    el = el.includes(' ') ? el.toUpperCase().split(' ') : el.toUpperCase().slice(0,4)
//      if (el.length === 2) {
//      return el[0].slice(0, 2) + el[1].slice(0, 2);
//    } else if (el.length === 3) {
//      return el[0].slice(0, 2) + el[2].slice(0, 2);
//    } else if (el.length === 4) {
//      return (
//        el[0].slice(0, 1) +
//        el[1].slice(0, 1) +
//        el[2].slice(0, 1) +
//        el[3].slice(0, 1)
//      );
//    }
//  });
// }


// console.log(birdCode(["Common Tern", "Black-Capped Chickadee"])) // ["COTE","BCCH"])
// console.log(birdCode(["American Redstart", "Northern Cardinal", "Barred Owl", "Starling", "Pigeon"]))//, ["AMRE","NOCA","BAOW","STAR","PIGE"])
// console.log(birdCode(["Great Crested Flycatcher", "Bobolink", "Red-Tailed Hawk", "Blue Jay"]))//, ["GCFL","BOBO","RTHA","BLJA"])
// console.log(birdCode(["Black-Crowned Night Heron", "Northern Mockingbird", "Dark-Eyed Junco"]))//, ["BCNH","NOMO",DEJU"])
// console.log(birdCode(["Scarlet Tanager", "Great Blue Heron", "American Black Duck", "Ovenbird"]))//, ["SCTA","GBHE","ABDU","OVEN"])
// console.log(birdCode(["Fox Sparrow", "Veery", "American Coot", "Northern Rough-Winged Swallow"]))//, ["FOSP","VEER","AMCO","NRWS"])









// function birdCode(arr) {
//     let code = [];
//     let ar = arr.map(word => word.includes('-') ? word.replace(/[-]/, ' ') : word = word)
//     for (let i = 0; i < ar.length; i++) {
//         if (!ar[i].includes(' ')) code.push(ar[i].slice(0,4).toUpperCase());

//         if (ar[i].split(' ').length === 2) {
//          let word = ar[i].split(' ');
//          code.push((word[0].slice(0,2) + word[1].slice(0,2)).toUpperCase())            
//         }
//         if (ar[i].split(' ').length === 3) {
//          let word = ar[i].split(' ');
//          code.push((word[0].slice(0,1) + word[1].slice(0,1) + word[2].slice(0,2)).toUpperCase())            
//         }
//         if (ar[i].split(' ').length === 4) {
//          let word = ar[i].split(' ');
//          code.push((word[0].slice(0,1) + word[1].slice(0,1) + word[2].slice(0,1) + word[3].slice(0,1)).toUpperCase())            
//         }
//     }    
//     return code
// }
    
  
    
// const reverse = (str, i = str.length, newstr = '') => i === 0 ? newstr : reverse(str, i -= 1, newstr += str[i])

// reverse('hello') /*?*/

// function gcd(num1,num2) {
//     let low = num1 > num2 ? num2 : num1;
//     let high = num1 > num2 ? num1 : num2;
//     if (high % low === 0) return low;
//     for (let i = Math.ceil(low / 2); i > 0 ; i--) {
//         if (high % i === 0 && low % i === 0) return i
//     }
// }

// function gcd(n1, n2) {
// 	if (n2 == 0) return n1 
//     return gcd(n2, n1 % n2);
// }

// gcd(32, 8) /*?*/ // 
// gcd(8, 12) /*?*/ // 
// gcd(17, 13) /*?*/ // 
// gcd(32, 8) /*?*/ // 8
// gcd(8, 12) /*?*/ // 4
// gcd(17, 13) /*?*/ // 1
// gcd(14, 7) /*?*/ // 7
// gcd(32, 16) /*?*/ // 16
// gcd(17, 100) /*?*/ // 1
// gcd(55, 20) /*?*/ // 5
// gcd(55, 22) /*?*/ // 11