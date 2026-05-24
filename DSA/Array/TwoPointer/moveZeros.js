



const moveZeros = (arr) => {

  let j = 0;
  for(let i = 0; i< arr.length; i++){
    if(arr[i] != 0){
      arr[j] = arr[i];
      j++;
    }
  }

  while(j < arr.length){
    arr[j] = 0;
    j++;
  }

  return arr;

}

let arr = [0,1,0,3,12]

console.log((moveZeros(arr)));

