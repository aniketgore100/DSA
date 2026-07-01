


const setMaZero = (mat) => {
    let rArr = [];
    let cArr = [];

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] == 0){
                rArr.push(i);
                cArr.push(j);
            }
        }
    }

    for(let i = 0; i < rArr.length; i++){
        let row = rArr[i];
        for(let j = 0; j < mat[row].length; j++){
            mat[row][j] = 0;
        }
    }


    for(let i = 0; i < cArr.length; i++){
        let col = cArr[i];
        for(let j = 0; j < mat.length; j++){
            mat[j][col] = 0;
        }
    }

    return mat;
}


let mat = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];

console.log(setMaZero(mat));