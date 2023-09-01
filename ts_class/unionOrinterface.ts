interface Circle{
    radius:number
}
interface Square{
    side:number
}
interface Rectangle{
    width:number,
    height:number
}

type Shape=Rectangle|Square|Circle

function renderShape(shape:Shape){
    console.log('rendered')
}