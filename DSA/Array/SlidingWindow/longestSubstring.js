


const logestSub = (str) =>{
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for(let i = 0; i < str.length; i++){
        while(set.has(str[i])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[i]);
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
}


let str = 'pwwkew';

console.log(logestSub(str));
