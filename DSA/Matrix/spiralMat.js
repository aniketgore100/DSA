

const spiralMat = (mat) => {
    let res = [];
    let l = 0, r = mat[0].length - 1;
    let top = 0, bottom = mat.length - 1;

    while (l <= r && top <= bottom) {

        for (let i = l; i <= r; i++) {
            res.push(mat[top][i]);
        }
        top++;

        for (let j = top; j <= bottom; j++) {
            res.push(mat[j][r]);
        }
        r--;

        if (top <= bottom) {
            for (let k = r; k >= l; k--) {
                res.push(mat[bottom][k]);
            }
            bottom--;
        }


        if (l <= r) {
            for (let j = bottom; j >= top; j--) {
                res.push(mat[j][l]);
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

console.log(spiralMat(mat));