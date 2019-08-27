

const digitSort = (arr, num) => arr.sort((a,b) => String(b).length - String(a).length || a - b)

//   Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.
  
console.log(digitSort([77, 23, 5, 7, 101])) 
                                           // [ 101, 23, 77, 5, 7 ]
console.log(digitSort([1, 5, 9, 2, 789, 563, 444])) 
                                                   // [ 444, 563, 789, 1, 2, 5, 9 ]
console.log(digitSort([53219, 3772, 564, 32, 1])) 
                                                //  [ 53219, 3772, 564, 32, 1 ]
console.log(digitSort([9, 667, 87, 56, 3023, 5555, 111])) 
                                                         // [ 3023, 5555, 111, 667, 56, 87, 9] 
console.log(digitSort([77, 23, 5, 7, 101]))
                                          // [ 101, 23, 77, 5, 7 ]

console.log(digitSort([1, 5, 9, 2, 789, 563, 444]))
                                                  // [ 444, 563, 789, 1, 2, 5, 9 ]
