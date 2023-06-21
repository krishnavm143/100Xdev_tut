function count(first, last) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum = sum + i
    }
    return sum
}

function printToScreen() {
    console.log('10 passed')
}
setTimeout(printToScreen, 10 * 1000)
const ans = count(1, 1000000000)

console.log(ans)