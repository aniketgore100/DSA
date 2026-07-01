

const binarySearch = (arr, t) => {
    let left = leftSearch(arr, t);
    let right = rightSearch(arr, t);
    return [left, right];
}



function leftSearch(arr, t){
    let l = 0, r = arr.length-1;
    let left = -1;
    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2);
        if(arr[mid] == t){
            left = mid;
            r = mid - 1;
        }
        else if(arr[mid] > t){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    
    return left;
}


function rightSearch(arr, t){
    let l = 0, r = arr.length-1;
    let right = -1;
    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2);
        if(arr[mid] == t){
            right = mid;
            l = mid + 1;
        }
        else if(arr[mid] > t){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    
    return right;
}


let arr = [2,3,4,5,6,7,8,9,12,12,14,14,15,16], t = 14;
console.log(binarySearch(arr, t));
