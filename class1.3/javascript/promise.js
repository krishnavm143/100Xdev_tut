// function medicine1Get() {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, 10000)
//     })
// }

// var medicine = medicine1Get();
// medicine.then(() => {
//     console.log('medicine 1 recieved')
// })

function promiseBody(resolve) {
    setTimeout(resolve, 5000)
}

function medicine1Get() {
    var answer = new Promise(promiseBody)
    return answer
}

function printThing() {
    console.log('Just printing thing')
}

var medicine = medicine1Get();
console.log(medicine)
medicine.then(printThing)