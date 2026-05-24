

const container = (arr) => {
    let n = arr.length;
    let res = 0;
    let left = 0, right = n - 1;
    while(left < right){
        let prod = Math.min(arr[left], arr[right]) * (right - left);
        if(prod > res){
            res = prod;
        }
        if(arr[left] < arr[right]){
            left++;
        }else{
            right--;
        }
    }
    return res;
}



let arr = [1,1];
console.log((container(arr)));
