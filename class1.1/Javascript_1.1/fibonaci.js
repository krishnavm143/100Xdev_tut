const fib = (n) => {
    let series = [0, 1]

    for (let i = 2; i < n; i++) {
        const sum = series[i - 1] + series[i - 2]
        series.push(sum)
    }
    return series
}

const n = 10;

const series = fib(n)
console.log(series)