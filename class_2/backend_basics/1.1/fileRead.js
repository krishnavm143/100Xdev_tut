const fs = require('fs')

function readingFile(err, data) {
    console.log(data)
}

fs.readFile('a.txt', 'utf8', readingFile)