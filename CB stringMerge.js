// Have the function StringMerge(str) read the str parameter being passed which will contain a large string of alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings. Your goal is to return a new string by pairing up the characters in the corresponding locations in both strings. For example: if str is "abc1*kyoo" then your program should return the string akbyco1o because a pairs with k, b pairs with y, etc. The string will always split evenly with the asterisk in the center

//  ex.  abc1*kyoo =>  akbyco1o

function StringMerge(str) {
    
        let pair = str.split('*');    
        let string = '';    
        for (let i = 0; i < pair[0].length; i++) {
            string += pair[0][i] + pair[1][i];
        }    
        return string;             
}

console.log(StringMerge('aaa*bbb'))   // ababab
console.log(StringMerge('123hg*aaabb')) // 1a2a3ahbgb


// function StringMerge(str) { 
// 	const cleanString = str.replace(/[^\w*]/g, '');
// 	const len = (cleanString.length - 1) / 2;
// 	let newString = '';
// 	const arr = str.split('*');

// 	for (let i = 0; i < len; i++) {
// 		newString += arr[0][i] + arr[1][i];
// 	}
// 	return newString;
// }
// }

// function StringMerge(str) { 
//     var input = str.split('*');
//     var result = '';
//     for (var i = 0; i < input[0].length; i++) {
//         result += input[0][i] + input[1][i];
//     }
//     return result;
// }

// function StringMerge(str) {
//     let a = str.split('*');
//     let r = '';
//     for (let i = 0; i < a[0].length; i++) {
//         r += a[0][i] + a[1][i];
//     }
//     return r;
// }
   
   
