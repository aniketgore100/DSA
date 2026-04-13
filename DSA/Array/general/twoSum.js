

const twoSum = (nums, target) =>{
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(map.has(diff)){
            console.log(`Pair found: ${map.get(diff)}, ${i}`);
        }
        console.log("nums[i]: ", i, nums[i]);
        map.set( nums[i], i);
    }
}


let sum = [2,3,4];
let target = 6;
let result = twoSum(sum, target);
console.log(result);