

const maxOnes =(arr, k) => {
    let count = 0;
    let l = 0; 
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            if(count <=k ){
                arr[i] = 1;
                count++;
            }
        }
        else{
            res = Math.max(res, (i-l+1));
            count = 0;
        }
    }
}