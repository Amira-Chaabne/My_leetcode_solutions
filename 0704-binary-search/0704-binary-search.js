/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // Brut force solution ( with time complexity: O(n) )
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) {
            return i;
        }
    }
    return -1;
};