

const transpose = (mat) => {
  let r = mat.length;
  let c = mat[0].length;

  for(let i = 0; i < r; i++){
    for(let j = i + 1; j < c; j++){
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  return mat;
}

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(transpose(mat))
