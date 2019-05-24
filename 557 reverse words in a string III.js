//  557 Reverse words in a string III


//Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



const reverseWords = s => s.split(' ').map(word => word.split('').reverse().join('')).join(' ');


console.log(reverseWords("Let's take LeetCode Contest"))
//                                                        s'teL ekat edoCteeL tsetnoc