


const longestRepeat = (arr, k) => {
    let map = new Map();
    let left = 0;
    let maxF = 0;
    let maxL = 0;

    for(let i = 0; i < arr.length; i++){

        let char = str[i];
        map.set(char, (map.get(char) || 0) + 1);
        maxF = Math.max(maxF, map.get(char));

        while((i - left + 1) - maxF > k){
            map.set(str[left], map.get(str[left]) - 1);
            left++;
        }
        maxL = Math.max(maxL, (i - left) + 1);
    }
    return maxL;
}


let str = "aababba", k = 1;
console.log(longestRepeat(str, k));

// declare variables
// set frequency of each caracter
// count maxFreq
// check if the window is invalid or not, if yes then remove the left char and its freq by one, move left ;
// count maxlength(maxlen, (r - f) + 1);
