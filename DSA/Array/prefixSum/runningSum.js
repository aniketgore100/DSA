


const runningSum = (nums) =>  {
   let prefix = [];
   prefix[0] = nums[0];
   for(let i = 1; i < nums.length; i++){
    prefix[i] = prefix[i - 1] + nums[i];
   }
   return prefix;
};


let nums = [1,2,3,4];
console.log(runningSum(nums));

