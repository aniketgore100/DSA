const spiralmat = (mat) => {
    let l = 0, r = mat[0].length-1;
    let res = [];
    let top = 0, bottom = mat.length-1;

    while(l <= r && top <= bottom){
        
        for(let i = l; i <= r; i++){
            res.push(mat[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++){
            res.push(mat[i][r]);
        }
        r--;

        if(top <= bottom){
            for(let i = r; i >= l; i--){
                res.push(mat[bottom][i]);
            }
            bottom--;
        }

        if(l <= r){
            for(let i = bottom; i >= top; i--){
                res.push(mat[i][l]);
            }
            l++;
        }
    }
    return res;
}


let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralmat(mat));