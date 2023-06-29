const express = require('express')
const fs = require('fs')

function callBackFun(err, data) {
    console.log(data)
}
// fs.readFile('./a.txt', 'utf8', (err, data) => {
//     console.log(data)
// })
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//     console.log(data)
// })
fs.readFile('./a.txt', 'utf8', callBackFun)
// const app=express()

// app.get('/')