// const fetch = require('node-fetch')
const fetch = require('cross-fetch');

// function logResponseBody(jsonBody) {
//     console.log(jsonBody);
// }

// function callbackFn(result) {
//     result.json().then(logResponseBody)
// }

// var sendObj = {
//     method: "GET",
// };

// fetch("http://localhost:3000/handleSum?counter=100", sendObj).then(callbackFn)

// function logResponseBody(body) {
//     console.log(body)
// }

// function callBackFn(res) {
//     console.log(res.status)
//     res.json().then(logResponseBody)
// }
var sendObj = {
    method: "GET"
}
// fetch('http://localhost:9000/handleSum?counter=100', sendObj).then(callBackFn)
fetch('http://localhost:9000/handleSum?counter=100', sendObj).then((res) => res.json()).then(res => console.log('this is', res))