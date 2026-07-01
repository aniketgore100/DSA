


// const setZeros = (mat) => {
//     let r = mat.length - 1;
//     let c = mat[0].length - 1;
//     let top = 0
//     let row = [];
//     let column = [];

//     while (top <= r) {
//         for (let i = 0; i <= c; i++) {
//             if (mat[top][i] == 0) {
//                 row.push(top);
//                 column.push(i);
//             }

//         }
//         top++;
//     }

//     top = 0;
//     if (row.length >= 1 && column.length >= 1) {
        
//         for (let i = 0; i <column.length; i++){
//             for (let j = top; j <=r; j++) {
//                 mat[j][column[i]] = 0;
//             }
//         }
//         for(let j = 0; j < row.length; j++){
//             for(let i = 0; i <= c; i++){
//                 mat[row[j]][i] = 0;
//             }
//         }
//     }
//     return mat;
// }


const setzero = (mat) => {
    let r = mat.length-1;
    let c = mat[0].length-1;
    let top = 0;

    let row = [];
    let col = [];

    while(top <= r){
        for(let i = 0; i <= c; i++){
            if(mat[top][i] == 0){
                row.push(top);
                col.push(i);
            }
        }
        top++;
    }

    top = 0;

    if(row.length >=1 && col.length >= 1){

        for(let i = 0; i < col.length; i++){
           for(let j = top; j <= r; j++){
              mat[j][col[i]] = 0;
           }
        }

        for(let j = 0; j < row.length; j++){
            for(let i = 0; i<= c; i++){
                mat[row[j]][i] = 0;
            }
        }
        

    }
    return mat;

}


let mat = [
    [0,1,3,0],
    [3,7,9,5],
    [4,9,2,6],
    [8,6,8,7]
]

console.log(setzero(mat));
