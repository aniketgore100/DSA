


const maxDepth = (s) => {
    const stack = [];
    let count = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push(s[i]);
            count = Math.max(count, stack.length);
        }else if(s[i] == ')'){
            stack.pop();
        }
    }
    return count;
}

let s = "(1+(2*3)+((8)/4))+1"
console.log(maxDepth(s));