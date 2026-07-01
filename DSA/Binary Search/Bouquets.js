const banquest = (arr, m, k) => {

    function isPossible(arr, m, k, mid){
        let ban = 0, count = 0;

        for(let i = 0; i < arr.length; i++){
            if(arr[i] <= mid){
                count++;
            }else{
                ban += Math.floor(count / k);
                count = 0;
            }
        }

    ban += Math.floor(count / k);
    return ban >= m;

}

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let res = -1;

    while(min <= max){
        let mid = Math.floor(min + (max - min) / 2);
        if(isPossible(arr, m, k, mid)){
            res = mid;
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    return res;
}


let arr = [1,10,3,10,2], m = 3, k = 1
console.log(banquest(arr, m , k));