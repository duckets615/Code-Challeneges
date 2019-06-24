function digitSort(arr, num) {
    let unique = Array.from(new Set(arr)).length;
    let sorted = [];
    for (let i = 1; i <= unique; i++) {
        sorted.push(arr.filter(el => el.toString().length === i).sort((a,b) => b - a));                
    }
    return sorted.flat().reverse();
} 

//   Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.
  

  console.log(digitSort([77, 23, 5, 7, 101]))
                                             //[ 101, 23, 77, 5, 7 ]
  
  console.log(digitSort([1, 5, 9, 2, 789, 563, 444]))
                                                    // [ 444, 563, 789, 1, 2, 5, 9 ]
  
  console.log(digitSort([53219, 3772, 564, 32, 1]))
                                                  // [ 53219, 3772, 564, 32, 1 ]