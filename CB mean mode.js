// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the 
// mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 
//     because the mode (3) equals the mean (3)). The array will not be empty, will only contain 
//     positive integers, and will not contain more than one mode.

const MeanMode = ar => ar.reduce((total, value) => total +  value) / 2 === ar.sort((a,b) => ar.filter(value => value === a).length - ar.filter(value => value === b).length).pop() ? 1 : 0;


console.log(MeanMode([5, 3, 3, 3, 1]));