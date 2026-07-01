

const makeVal = (s) => {
    const stack = [];
    let set = new Set();
    let result = "";


    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                set.add(i);
            }
        }
    }

    while (stack.length > 0) {
        set.add(stack.pop());
    }

    for (let i = 0; i < s.length; i++) {
        if (!set.has(i)) {
            result += s[i];
        }
    }
    return result;
}

let s = "a(n(i)kt";
console.log(makeVal(s));