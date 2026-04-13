
// const moveZeros = (arr) =>{
//     let j = arr.length-1;
//     let i = 0;
//     while(i < j){
//         if(arr[i] === 0){
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//             j--;
//         }
//          i++;
//     }
//     for(let i = 0; i<j; i++){
//         if(arr[i] > arr[i + 1]){
//             let temp = arr[i + 1];
//             arr[i + 1] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }


const moveZeros = (arr) =>{
    let nonzero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[nonzero] = arr[i];
            nonzero++
        }
    }
    while(nonzero < arr.length){
        arr[nonzero] = 0;
        nonzero++;
    }
}


let arr = [0,1,0,3,12];
moveZeros(arr);
console.log(arr);
