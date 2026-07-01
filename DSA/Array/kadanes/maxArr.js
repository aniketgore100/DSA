

const maxArr = (arr) => {
    let prod = 1;
    let maxProd = 0;
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        prod = prod*arr[i];
        console.log("prod ::", prod);
        if(prod > res){
            maxProd = prod;
        }
        else if(prod < 0){
            res = 1;
        }
    }
    return maxProd;
}

let arr = [1,2,3,4,5,-5,6,-6];
console.log(maxArr(arr));