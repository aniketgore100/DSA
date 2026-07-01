


const startEnd = (arr, target) => {

    let l = 0, h = arr.length - 1;
    let mid = Math.floor(l + (h - l) / 2);
    return mid;
  
}

let arr = [5,7,7,8,8,10], k = 8;
console.log(startEnd(arr, k));