



let NumArray = function(nums) {
    this.prefix_sum = [];
    this.prefix_sum[0] = nums[0];

    for(let i = 1; i<nums.length; i++){
        this.prefix_sum[i] = this.prefix_sum[i - 1] + nums[i];
    };


};


NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {   // fix 2 (edge case)
        return this.prefix_sum[right];
    }
    let result = this.prefix_sum[right] - this.prefix_sum[left - 1];
    return result;
};


let nums = [-2,0,3,-5,2,-1];
let obj1 = new NumArray(nums);
 
let left = 0; 
let right = 5;
let param_1 = obj1.sumRange(left,right)

console.log(param_1);
