



// const longPal = (str) => {
//   let longest = " ";

//   for(let i = 0; i < str.length; i++){
//     expand(i, i);
//     expand(i, i + 1);
//   }

//   return longest;

//   function expand(l, r){
//     let currStr = " ";
//     while(l >= 0 && r < str.length && str[l] == str[r]){
//         currStr = str.slice(l, r + 1);
//         longest = currStr.length > longest.length ? currStr : longest;

//         l--;
//         r++;
//     } 
//   }
// }

// console.log(longPal("abba"));


const longPal = (str) => {
  let longest = " ";
  let count = 0;

  for(let i = 0; i < str.length; i++){
    expand(i, i);
    expand(i, i + 1);
  }

  return count;

  function expand(l, r){
    let currStr = " ";
    while(l >= 0 && r < str.length && str[l] == str[r]){
        count++;

        l--;
        r++;
    } 
  }
}

console.log(longPal("abba"));