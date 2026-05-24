



// const threeSum = (arr) => {

//     let res = [];
//     arr.sort((a, b) => a - b);

//     for(let i = 0; i<arr.length; i++){
//         if(i > 0 && arr[i] === arr[i - 1]){
//             continue;
//         }

//         let j = i+1;
//         let k = arr.length-1;

//         while(j < k){

//             let sum = arr[i] + arr[j] + arr[k];
//             if(sum > 0) {
//                 k--;
//             }
//             else if(sum < 0) {
//                 j++;
//             }
//             else{
//                 res.push([arr[i], arr[j] ,arr[k]]);
//                 j++; 

//                 while(arr[j] === arr[j-1] && j < k){
//                 j++;
//             }
//             }
//         }
//     }
//     return res;
// }


const Sum = (arr) => {
    let n = arr.length;
    let res = [];
    arr.sort((a, b) => a-b);

    for(let i = 0; i<n; i++){
        if(i > 0 && arr[i] === arr[i-1]){
            continue;
        }

        let j = i+1;
        let k = n-1;

        while(j < k){
            let total = arr[i] + arr[j] + arr[k];
            if(total > 0){
                k--;
            }
            else if(total < 0){
                j++;
            }
            else{
                res.push(arr[i], arr[j], arr[k]);
                j++;

                while(j < k && arr[j] === arr[j - 1]){
                    j++;
                }
            }
            
        }

    }
    return res;
}


let arr = [-1,0,1,2,-1,-4];
console.log(Sum(arr));
