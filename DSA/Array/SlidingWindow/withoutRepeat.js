


const withoutRepeat = (s) => {
    let count = 0;
    let map = new Map();
    let l = 0;
    for(let i = 0; i< s.length; i++){

        if(map.has[s[i]]){
            while(map.has(s[i])){
                map.delete(s[l]);
                l++;
            }
        }
        count = Math.max(count, (i - l) + 1);
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    return count;
}


let s = "abcabcbb";
console.log(withoutRepeat(s));