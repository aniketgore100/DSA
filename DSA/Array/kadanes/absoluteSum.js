

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let sum = 0, currMax = 0, currMin = 0;

    for(let i = 0; i < nums.length; i++){
       sum += nums[i];
       currMax = Math.max(nums[i], currMax + nums[i]);
    
    }
    
};