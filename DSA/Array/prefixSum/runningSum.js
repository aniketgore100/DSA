


var runningSum = function(nums) {
    let prefix = [];
    prefix[0] = nums[0];
    for(let i = 1; i<nums.length; i++){
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return prefix;
};

