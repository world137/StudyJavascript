// const data = [1,2,3,4,5]

// const newdata2 = data.reduce((value,element) => {
//     console.log(value)
// 	const sum = value  + element
// 	return sum
// },0)


// console.log("sum = " + newdata2)

const cart = [
    {name : "a" ,price : 10},
    {name : "b" ,price : 5},
    {name : "c" ,price : 30},
    {name : "d" ,price : 15},
]

const price = cart.reduce((value,element)=>{
    console.log(value)
    const sum = value + element.price
    return sum
},0)

console.log("price : " + price)