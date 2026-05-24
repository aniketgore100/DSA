

const avgSum = (arr, k) =>{
    let maxAvg = 0;
    for(let i = 0; i < k; i++){
        maxAvg += arr[i];
    }
    maxAvg = maxAvg/k;

    for(let i = 1; i<arr.length-k; i++){
        let res = 0;
        res = res + arr[i-1] + arr[i+k-1];
        res = res / k;
        if(res > maxAvg){
            maxAvg = res;
        }
    }
    return maxAvg;
}


let arr = [0,1,1,3,3];
console.log(avgSum(arr, 4));
