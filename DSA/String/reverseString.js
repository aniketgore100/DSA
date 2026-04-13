


const reverseStr = (arr) =>{
     let j = 0;
    let i = arr.length - 1;

    while (j < i) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
        i--;
    }
    
}


let str = ['a','n', 'i', 'k', 'e', 't'];
reverseStr(str)

console.log(str);