


const anagram = (s, p) => {
    let pMap = new Map();
    let sMap = new Map();

    let res = [];

    let l = 0;

    for(let i = 0; i < p.length; i++){
        pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
    }

    for(let i = 0; i < s.length; i++){

        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);

        if((i - l + 1) > p.length){

            sMap.set(s[l], sMap.get(s[l]) - 1);
        
            if(sMap.get(s[l]) === 0){
                sMap.delete(s[l]);
            }
            l++;
      }

      if((i - l + 1) === p.length && isAnagram(pMap, sMap)){
          res.push(l);
      };
      
    }

    function isAnagram(pMap, sMap){
        if(pMap.size !== sMap.size){
            return false;
        }
        for(let [key, val] of pMap){
            if(sMap.get(key) !== val){
                return false;
            }
        }
        return true;
    }
    return res;

}


let s = "abcababbc", p = "abbc"
console.log(anagram(s, p));

