

const valPal = (str) => {
    let l = 0, j = str.length - 1;

    while( l <= j){
        if(str[l] !== str[j] && l < j){
          console.log("str[l] ::", str[l], "str[j] :: ", str[j], "are not equal, moving I");
            l++; 
        }
        l++;
        j--;
    }
    return true;
}

let s = "abca";
console.log(valPal(s));