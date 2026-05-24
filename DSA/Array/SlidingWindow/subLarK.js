
const maxSum = (arr, k) => {
    let sum = 0;
    for(let i = 0; i < k; i++){
        if(arr[i] !== arr[i-1]){
            sum += arr[i];
        }
    }
    let l = 0;
    let mSum = sum;
    for(let i = k; i<arr.length; i++){
        if(arr[i] !== arr[i - 1]){
        sum = sum - arr[l];

        sum = sum + arr[i];

        if(sum > mSum){
            mSum = sum;
        }
        l++;
        }
    }
    return mSum;
}

let arr = [1,1,2,2,9,9,9], k = 3;
console.log(maxSum(arr, k));