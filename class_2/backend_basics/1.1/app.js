// // It is an external library
// // const fs = require('fs')

// const express = require('express')

// const app = express()

// const port = 9000

// // function callBackWriteFun(err, data) {
// //     if (err) {
// //         console.log('something went wrong')
// //         return
// //     }
// //     console.log('updated succeffuly')
// // }

// // function callBackFun(err, data) {
// //     console.log(data)
// //     const firstName = data
// //     const newData = 'Heelo krishna My anme '

// //     fs.writeFile('a.txt', newData, 'utf-8', callBackWriteFun)
// // }

// // fs.readFile('a.txt', 'utf-8', callBackFun)

// const calculateSum = (n) => {
//     var sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += i;
//     }
//     return sum
// }



// app.get('/handlesum', (req, res) => {
//     const ress = calculateSum(100)
//     let ans = `The answer is ${ress}`
//     res.send(ans)
// })
// app.get('/handlesum1', (req, res) => {
//     const ress = calculateSum(100)
//     let ans = `The answer is ${ress}`
//     res.send(ans)
// })

// app.get('/handlesum2', (req, res) => {
//     const ress = calculateSum(100)
//     let ans = `The answer is ${ress}`
//     res.send(ans)
// })

// // app.get('name', (req, res) => {
// //     res.send('krishna')
// // })

// app.listen(port, () => {
//     console.log(`app is listening at ${port}`)
// })


const express = require('express');
const app = express();
const port = 9000;

const calculateSum = (n) => {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    // console.log(req.headers.counter)
    const counter = req.headers.counter
    // const counter = req.query.counter
    const ress = calculateSum(counter);
    let ans = `The answer is ${ress}`;

    res.send(ans);
}

// app.get('/handlesum', handleFirstRequest);
app.post('/handlesum', handleFirstRequest);

// app.post('/creatUser', (req, res) => {
//     res.send('Hello world')
// })



app.listen(port, () => {
    console.log(`app is listening at ${port}`);
});
