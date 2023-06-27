const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 9000
app.use(bodyParser.json())

function middelware1(req, res, next) {
    console.log('in middelware', req.headers)
    next()
}


function calculateSum(counter) {
    var sum = 0;
    for (var i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}
// 4=1*2*3*4
function calculateMul(counter) {
    var answer = 1;
    for (var i = 1; i <= counter; i++) {
        answer = answer * i;
    }
    return answer;
}
function handleFirstRequest(req, res) {

    // var counter = req.body.counter;
    var counter = req.query.counter;

    if (counter < 100000) {
        var calculatedSum = calculateSum(counter);
        var calculatedMul = calculateMul(counter);
        console.log('mul', calculatedMul)


        var ansObj = {
            sum: calculatedSum,
            mul: calculatedMul
        }
        res.status(200).json(ansObj)
    } else {
        res.status(411).send('You haved a big number')
    }
}

function givePage(req, res) {
    res.sendFile(__dirname + '/index.html')
}

app.get('/', givePage)


app.get('/handleSum', handleFirstRequest)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

