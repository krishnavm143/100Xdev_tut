// const { str } = require("16")

function squarePattern(n, m) {
    let string = ""
    for (i = 0; i < n; i++) {

        for (j = 0; j < m; j++) {
            string += "*"
        }
        console.log(string)
        string = ""
    }
}

squarePattern(10, 10)