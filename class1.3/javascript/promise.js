function medicine1Get() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 10000)
    })
}

var medicine = medicine1Get();
medicine.then(() => {
    console.log('medicine 1 recieved')
})