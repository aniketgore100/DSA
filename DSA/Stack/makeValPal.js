

const countValid = (s) => {   
    const stack = [];
    let count = 0;

    for(let i of s){
        if(i == '('){
            stack.push(i);
        }
        else{
            if(i == ')'){
                stack.pop();
            }
        }
        
    }

    if(stack.length == 0){
        count++;
    }

   return count += stack.length;
}



let s = '())';
console.log(countValid(s));