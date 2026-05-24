

const targetSum = (nums, target) => {
    let n = nums.length;
    let l = 0, r = n - 1;
    let result = [];
    while(l < r){
        let sum = nums[l] + nums[r];
        if(sum === target){
            result.push([l, r]);
            l++; r--;
        }
        if(sum < target){
            l++;
        }
        if(sum > target){
            r--;
        }
       
    }
    return result;
}



let nums = [1,2,3,4,5,6,7,8,9];
console.log(targetSum(nums, 9));
