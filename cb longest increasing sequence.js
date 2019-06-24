// Write a function oddOneOut(str) that will take in a string and return the unpaired characters in the order it was encountered as an array.
// E.g
// str = 'Hello World' will return ["H", "e", " ", "W", "r", "l", "d"]
// str = 'Codewars' -> ["C", "o", "d", "e", "w", "a", "r", "s"] (no letter has a pair)
// str = 'woowee' -> [] (all letters pair up)
// str = 'wwoooowweeee' -> []
// str = 'racecar' -> ["e"]
// str = 'Mamma' -> ["M"]
// str = 'Mama' -> ["M", "m"]
// Letters are case-sensitive.

function oddOneOut(str) {
    // code me
 }

 

console.log(oddOneOut('Hello World')) // ["H", "e", " ", "W", "r", "l", "d"]
console.log(oddOneOut('Codewars')) // ["C", "o", "d", "e", "w", "a", "r", "s"];
console.log(oddOneOut('woowee')) // [];
console.log(oddOneOut('wwoooowweeee')) // [];
console.log(oddOneOut('racecar')) // ["e"];
console.log(oddOneOut('Mamma')) // ["M"];
console.log(oddOneOut('Mama')) // ["M", "m"];
console.log(oddOneOut('¼ x 4 = 1')) // ["¼", "x", "4", "=", "1"];
console.log(oddOneOut('¼ x 4 = 1 and ½ x 4 = 2')) // ["¼", "1", "a", "n", "d", "½", "2"];

// function oddOneOut(str) {
//     let chars = new Set();
//     for (let c of str) {
//       if (chars.has(c))
//         chars.delete(c);
//       else
//         chars.add(c);
//     }
//     return Array.from(chars);

//     function oddOneOut(str) 
// {
//   res = []
//   for (var i = 0, l = str[i]; i < str.length; l = str[++i])
//   {
//     var pos = res.indexOf(l);
//     if (pos > -1) 
//       res.splice(pos, 1)
//     else
//       res.push(l)  
//   }
//   return res;
// }

// function oddOneOut(str) {
//     var map = {};
//     var result =[];
//     for(var i = 0; i < str.length; i++) {
//         map[str[i]] = map[str[i]] + 1 || 1;
//     }
    
//     for(i = str.length - 1; i >= 0; i--){
//         if(map[str[i]] % 2 !== 0){
//             result.push(str[i]);
//             map[str[i]]--;
//         }
//     }
//     return result.reverse()
// }

// function oddOneOut(str) {
//     var tmp = {};
//     var order = [];
//     for (var i = str.length-1; i >= 0; i--) {
//       if (tmp.hasOwnProperty(str[i])) tmp[str[i]]++;
//       else {
//         tmp[str[i]] = 1;
//         order.push(str[i]);
//       }
//     }
    
//     var array = []
//     for (var i = order.length-1; i >= 0; i--) {
//       if (tmp[order[i]] % 2 !== 0) array.push(order[i]);
//     }
//     return array;
//   }