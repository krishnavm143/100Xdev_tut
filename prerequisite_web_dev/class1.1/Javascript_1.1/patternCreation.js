function createPattern(numberOfRows) {
    for (i = 0; i < numberOfRows; i++) {
        let stringToPrint = ""
        for (j = 0; j < i + 1; j++) {
            stringToPrint = stringToPrint + '*'
        }
        console.log(stringToPrint)
    }
}

// createPattern(10)

function starLinePattern(n) {
    var answer = ""
    for (i = 0; i < n; i++) {
        // let starToPrint = ""
        answer = answer + "**"
        // for (j = 0; j < i + 1; j++) {
        //     starToPrint += "**"
        // }
        // console.log(starToPrint)
    }
    console.log(answer)
}

function starryPattern(n) {
    for (i = 0; i < n; i++) {
        starLinePattern(i)
    }
}
// starLinePattern(10)

starryPattern(10)