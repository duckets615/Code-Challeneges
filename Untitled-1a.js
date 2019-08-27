

function hash(ar) {
    let target = 10
    let hash = [ar[0]];    
    let pairs = [];
    let Length = ar.length;
    for (let i = 1; i < ar.length; i++) {
        let current = ar[i];
        let dif = target - current;
        if (hash.indexOf(current) === -1) {
            hash.push(dif);
        } else {
            pairs.push([current, target - dif]);
        }        
    }
    return pairs
}

//hash([4, 5, 1, 8]) /*?*/
hash([1,2,3,4,5,6,7,8,9]) /*?*/