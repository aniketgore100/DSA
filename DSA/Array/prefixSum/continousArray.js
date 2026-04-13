


const maxSubArray = (arr) => {
    let map = new Map();
    map.set(0,-1);

    let n = arr.length;
    let sum = 0;
    let maxlen = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] == 0){
            arr[i] = -1;
        }
    }

    for(let i = 0; i<n; i++){
        sum += arr[i];
        if(map.has(sum)){
           let accurance =  map.get(sum);
           let len = i - accurance;
           if(len > maxlen){
            maxlen = len;
           }
        }
        map.set(sum, i);
    }
    return maxlen;
}


let arr = [0,1,1,1,1,1,0,0,0];
console.log(maxSubArray(arr));