


const productArr = (arr) => {
    let n = arr.length;
    let res = new Array(n).fill(1);

    for(let i = 1; i<arr.length; i++){
        res[i] = res[i - 1] * arr[i - 1];
    }

    let post = 1;
    for(let i = n-1; i>=0; i--){
        res[i] = res[i] * post;
        post = post * arr[i];
    }
    return res;
}


let arr = [8,9,10,11];

console.log(productArr(arr));

