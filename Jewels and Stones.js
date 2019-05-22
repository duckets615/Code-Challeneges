// function JewelsInStones(J, S) {
//     let count = 0;
//     let jewels = J.split('');
//     let stones = S.split('');
//     for (let i = 0; i < stones.length; i++) {
//         for (let j = 0; j < jewels.length; j++) {
//             if (stones[i] === jewels[j]) count++
//         }
//     }
//     return count;
// };



const JewelsInStones = (J,S) => S.split('').filter(ele => ele === J[0] || ele === J[1]).length









console.log(JewelsInStones('z', 'ZZ')) // 0
console.log(JewelsInStones('aA', 'aAABBBBB')) // 3;

