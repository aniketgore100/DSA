/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map = new Map();
    let maxSum = 0, sum = 0, l = 0;

    for(let i = 0; i < nums.length; i++){ 

        sum += nums[i];
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        if(i - l + 1 > k ){
            sum -= nums[l];
            map.set(nums[l], (map.get(nums[l])) - 1);

            if(map.get(nums[l]) === 0){
                map.delete(nums[l]);
            }
            l++;
        }
        if(i - l + 1 === k && map.size === k){
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

let arr = [1,5,4,2,9,9,9,8,7], k = 3;
console.log(maximumSubarraySum(arr, k));