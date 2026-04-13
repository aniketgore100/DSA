


const isValid = (str) => {

  const stack = [];

  for(let i of str){

    if(str[i] == '(' || str == '{' || str == '['){

        stack.push(str[i]);

    }else{

        if(stack.length == 0) return false;

        const top = stack.pop();
          if (
                (top === '(' && ch === ')') ||
                (top === '{' && ch === '}') ||
                (top === '[' && ch === ']')
            ){
                return false;
            }
    }
  }
      return stack.length === 0;

};


let result = isValid("(){}[]");