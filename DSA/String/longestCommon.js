

const longestCommon = (arr) =>{
    if(arr.length == 0) return " ";
    let prefix = arr[0];
    for(let i = 1; i<arr.length; i++){
        console.log(' i :: ', i)
        while(arr[i].indexOf(prefix) !== 0){
        prefix = prefix.slice(0, -1);
                    if (!prefix) return "";

        }

    }
    return prefix;
}


let strArray = ['flower', 'flow', 'flood', 'flue'];
let result = longestCommon(strArray);

// console.log(result);