const partitionArr = (arr, t) => {
    let min = new Array();
    let equal = new Array();
    let max = new Array();
    let res = new Array();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < t){
            min.push(arr[i]);
        }else if(arr[i] === t){
            equal.push(arr[i]);
        }else{
            max.push(arr[i]);
        }
    }
    res.push(...min, ...equal, ...max)
    return res;
}


let arr = [9,12,5,10,14,3,10], t = 10;

console.log(partitionArr(arr, t));