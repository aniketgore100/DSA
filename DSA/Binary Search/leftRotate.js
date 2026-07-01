


const leftrotate = (arr, k) => {
    k = k % arr.length;
    reverse(arr, 0, arr.length-1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
}

function reverse(arr, l, r){
    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}

let arr = [1,2,3,4,5,6,7];
console.log(leftrotate(arr, 3));