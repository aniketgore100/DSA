


const missingNumber = (arr) =>{
    let n = arr.length;
    sum = n * (n + 1) / 2;
    let result = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum - arr[i];
    }
    result = sum;
    return result;
}


let arr = [3,0,1];
missingNumber(arr);
