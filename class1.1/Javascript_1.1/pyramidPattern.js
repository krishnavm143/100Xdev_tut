function createPyramid(n) {
    for (i = 1; i <= n; i++) {
        let row = "";
        for (j = 1; j <= n - i; j++) {
            row = row + " "
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            row = row + '*'
        }
        console.log(row)
    }
}

// createPyramid(10)

// function createPyramid(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         for (let j = 1; j <= height - i; j++) {
//             row += ' ';
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// }


createPyramid(10)
