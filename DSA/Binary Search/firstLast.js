// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {

//     let left = leftBinarySearch(nums, target);
//     // let right = rightBinarySearch(nums, target);
88
//     return [left];

// };

// function leftBinarySearch(nums, target){
//     let l = 0, h = nums.length-1;
//     let left = -1;
//     while(l <= h){

//         let mid = Math.floor(l + (h - l) / 2);
//         if(nums[mid] == target){
//             left = mid;
//             h = mid - 1;
//         }
//         else if(nums[mid] < target){
//             l = mid+1;
//         }else{
//             h = mid - 1;
//         }
//     }
//     return left;
// }

// function rightBinarySearch(nums, target){
//     let l = 0, h = nums.length-1;
//     let right = -1;
//     while(l <= h){
    
//         let mid = Math.floor(l + (h - l) / 2);
//         if(nums[mid] == target){
//             right = mid;
//             l = mid+1;
//         }
//         else if(nums[mid] < target){
//             l = mid + 1;
//         }else{
//             h = mid - 1;
//         }
//     }
//     return right;
// }


const searchRange = (arr, t) => {
  let first = -1;
  let last = -1;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === t){
        if(first === -1){
            first = i;
        }
        last = i;
    }
  }
  return [first, last]
}


let arr = [5,7,7,8,8,10], t = 8;
console.log(searchRange(arr, t));









