// Create a function that takes a single string as argument and returns an ordered list containing the 
// indexes of all capital letters in the string. Return an empty array if no uppercase 
// letters are found in the string.
//  ex. 
// "eDaBiT" ➞ [1, 3, 5]
// "eQuINoX" ➞ [1, 3, 4, 6]

function indexOfCaps(str) {
        //code here
    }
    
    console.log(indexOfCaps("eDaBiT")) // [1, 3, 5]    
    console.log(indexOfCaps("eQuINoX")) // [1, 3, 4, 6]    
    console.log(indexOfCaps("determine")) // []    
    console.log(indexOfCaps("STRIKE")) // [0, 1, 2, 3, 4, 5]    
    console.log(indexOfCaps("sUn")) // [1]
    console.log(indexOfCaps("@xCE#8S#i*$en"))// [2, 3, 6])
    console.log(indexOfCaps("1854036297"))// [] 
    console.log(indexOfCaps("Fo?.arg~{86tUx=|OqZ!"))// [0, 12, 16, 18]
    
    const indexOfCaps = str => str.split('').map((ele,i) => ele = ele.toUpperCase() === ele  && ele.match(/[a-z]/i) ?
    i : ele).filter(ele => typeof ele === 'number')

    
    function indexOfCaps(str) {
        let idx = [];
        let ar = str.split('');
        for (let i = 0; i < ar.length; i++) {
            if (ar[i].toUpperCase() === ar[i] && ar[i].match(/[a-z]/i)) {
            idx.push(i)
            }
        }
        return idx;
    }


    
    
    
    




	
