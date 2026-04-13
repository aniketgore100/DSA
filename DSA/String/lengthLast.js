

const lenghtLast = (str) => {
    str = str.trim();
    for(let i = str.length-1; i>=0; i--){
        if(str[i] === ' '){
            return str.length - i - 1;
        }
    }
    return str.length;
}


let str = "hello world"
console.log(lenghtLast(str));