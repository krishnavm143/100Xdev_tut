let a = 10

a = [
    { name: 'kitty', age: 21 },
    { name: 'krisahna', age: 23 },
]
// console.log(a)

for (n of a) {
    console.log(n.name + n.age)
}

function sumAll(firstIndex, endIndex) {
    let sum = 0

    for (i = firstIndex; i < endIndex; i++) {
        // sum = sum + i
        sum += i
    }

    return sum
}

a = sumAll(1, 1000)
console.log('sum aoo', a)

function sum(index1, index2) {
    return index1 + index2
}

function mul(index1, index2) {
    return index1 * index2
}

function dic(index1, index2) {
    return index1 / index2
}

function doArtihmetic(firEl, secEl, artihmetic) {
    return artihmetic(firEl, secEl)
}

let ans = doArtihmetic(10, 20, sum)
console.log('sum', ans)

ans = doArtihmetic(10, 20, mul)
console.log('mul', ans)

ans = doArtihmetic(10, 20, dic)
console.log('div', ans)
