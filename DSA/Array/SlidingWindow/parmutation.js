




const parmutation = (s, t) => {
    let sMap = new Map();
    let tMap = new Map();

    for(let i = 0; i < s.length; i++){
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }

    let l = 0;

    for(let i = 0; i < t.length; i++){

        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);

        if((i - l + 1) > s.length){ 
            tMap.set(t[l], tMap.get(t[l]) - 1);
            if(tMap.get(t[l]) === 0){
                tMap.delete(t[l]);
            }
            l++;
        }

        if((i - l + 1) === s.length && isParmutation(sMap, tMap)){
            return true;
        }

    }
    return false;
    function isParmutation(sMap, tMap){
        if(sMap.size !== tMap.size){
            return false;
        }
        for(let [key, val] of sMap){
            if(tMap.get(key) !== val){
                return false;
            }
        }
        return true;
    }
}

let s1 = "ab", s2 = "eidbaooo";
console.log(parmutation(s1, s2));