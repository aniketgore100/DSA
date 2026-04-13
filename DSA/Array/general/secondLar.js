


const secondLargest = (arr) => {
    let secondL = 0;
    let largest = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > largest){
        secondL = largest;
        largest = arr[i];
        }else if(arr[i] < largest && arr[i] > secondL){
            secondL = arr[i];
        }
    }
    return secondL;
}


let arr = [10,10, 5, 8];
let result = secondLargest(arr);
console.log("result => ", result);


