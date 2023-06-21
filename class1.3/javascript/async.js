function printToScreen() {
    console.log('im printing after 3 sec')
}

setTimeout(printToScreen, 3 * 1000)
let sum = 0
for (let i = 0; i < 1000; i++) {
    sum += i
}

console.log('sum', sum)

