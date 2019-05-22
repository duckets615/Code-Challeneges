//    162. Find Peak Element

/* A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞. */






const sortArrayByParity = A => A.filter(ele => ele % 2  === 0).concat(A.filter(ele => ele % 2 !== 0));

console.log(sortArrayByParity([4,2,3,1], [2,4,1,3]))

