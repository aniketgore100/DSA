
const singleNumber = (arr) => {
     let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}


let arr =  [4,1,2,1,2]
console.log(singleNumber(arr));