const fs = require('fs')
function sum(n) {
    let sum = 0;

    for (i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum)
}

function fileIsRead(err, content) {
    if (err) {
        console.log('something went wrong')
        return
    }
    sum(content)
}

fs.readFile('chocloate.txt', 'utf8', fileIsRead)
sum(100)
