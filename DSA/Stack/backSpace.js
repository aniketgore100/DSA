var backspaceCompare = function(s, t) {
   let stack = [];
   let stacT = [];
   for(let i = 0; i < s.length; i++){
    if(s[i] !== '#'){
        stack.push(s[i]);
    }
    else{
        stack.pop();
    }
   }

    for(let i = 0; i < t.length; i++){
    if(t[i] !== '#'){
        stacT.push(t[i]);
    }
    else{
        stacT.pop();
    }
   }

    return stack.join('') === stacT.join('');
};

let s = "ab#c", t = "adc"
console.log(backspaceCompare(s, t));