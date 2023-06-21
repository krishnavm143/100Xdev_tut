

function printCounter() {
    console.log(counter)
    counter += 1;
}

setInterval(printCounter, 1 * 1000)

let counter = 1;
let counter1 = 1;

for (let i = 0; i < 10000; i++) {
    counter1 += 1
}

console.log('outside ', counter)