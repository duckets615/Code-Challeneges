// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

// Hard challenges are worth 15 points and you are not timed for them. Use the Parameter Testing feature in the box below to test your code with different arguments.

function digits(num) {
    if (num.toString().length === 4) return num;
    if (num.toString().length === 3) return +(num.toString() +'0')
    if (num.toString().length === 2) return +(num.toString() + '00')
    if (num.toString().length === 1) return +(num.toString() + '000')
}

function kap(n) {
    let match = false, count = 0;
    while (match === false) {
        let num = digits(n)
        let asc = +(num.toString().split('').sort((a,b) => a - b).join(''));
        let desc = +(num.toString().split('').sort((a,b) => b - a).join(''));
        let target = desc - asc;
        if (target === 6174) {
            match = true;
            return count;
        } else {
            count++;
            n = target;
        }
        console.log(count);
        
    }

}

function kap(num) { 
    var count=0;
    while(num!=6174){
        var desc=parseInt(num.toString().split("").sort(function(a,b){return b-a}).join(""), 10);
        var asc=parseInt(num.toString().split("").sort(function(a,b){return a-b}).join(""), 10);
        if(desc<1000) desc*=10;
        num = desc-asc;
        count++;
    }

  // code goes here  
  return count; 
         
}
   
kap(3524)
