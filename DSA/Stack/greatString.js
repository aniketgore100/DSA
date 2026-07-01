


const greatString = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            stack.push(s[i]);
        }else{
            stack.pop();
        }
    }
    return stack.join("");
}


let s = "abBAcC"

console.log(greatString(s));