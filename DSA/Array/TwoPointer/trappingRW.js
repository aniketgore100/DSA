

const trappingRW = (nums) =>{
   let res = 0;
    let l = 1, r = nums.length-2;
    let ls = nums[0], rs = nums[nums.length-1];

    while(l <= r){
        ls = Math.max(ls, nums[l]);
        rs = Math.max(rs, nums[r]);
        if(rs < ls){
            res = res + (rs - nums[r]);
            r--;
        }else{
            res = res + (ls - nums[l]);
            l++;
        }
    }
    return res;
}


let arr = [1,8,6,2,5,4,8,3,7];

console.log(trappingRW(arr));

