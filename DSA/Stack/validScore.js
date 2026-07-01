


var scoreOfParentheses = function(s) {
    const stack = [0];

    for (let ch of s) {
        if (ch === '(') {
            stack.push(0);
        } else {
            let v = stack.pop();
            let score = Math.max(2 * v, 1);
            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};

let s = '()'
console.log(scoreOfParentheses(s))