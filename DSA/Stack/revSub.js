
const rev = (s, l, r) => {
    while(l <= r){
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
    return s;
}

const revString = (s) => {
    const stack = [];
    let res = "";
    for(let i = 0; i < s.length; i++){
        let l = 0, r = 0;
        if(s[i] == '('){
            stack.push(i);
        }
        else if(s[i] == ')'){
            l = stack.pop();
            console.log("pop : ", r);

            l = l + 1;
            r = i - 1;

            console.log("l : ", l, "r :", r)
            res = rev(s, l, r);
        }
    }
    return res;
}

let s = "(ed(et(oc))el)";
let arr = s.split("");
console.log(revString(arr).join(" "));