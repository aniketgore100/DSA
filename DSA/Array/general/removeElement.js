


const removeElement = (arr, val) => {
    if(arr.length === 0){
        return 0;
    }

    let k = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== val){
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}


let arr = [3,2,2,3];
let val = 3;

let result = removeElement(arr, val);
console.log(result, arr);