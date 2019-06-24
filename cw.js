
// const empty = array => 

const mispelled = (word1, word2) => word1.split(' ').map(letter => word2.includes(letter))
    


console.log(mispelled('versed', 'applb'), false);
