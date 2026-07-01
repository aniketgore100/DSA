/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = target = nums[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
  };

  map = [3,2, ]

let nums = [3,2,4], target = 6;
console.log(twoSum(nums, target));