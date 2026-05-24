

const validPali = (str) =>{
    let n = str.length;
    str = str.toLowerCase();
    let l = 0, r = n-1;

    while(l <= r){
        if( (!str[l] >= 97 && !str[l]<=122) &&  !str[r] >= 97 && !str[r]<=122){
            return false;
        }
        l++;
        r--;
    }
    return true;
}


let str = "A man, a plan, a canal: Panama"
console.log(validPali(str));
