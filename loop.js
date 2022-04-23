// const data = [10,2,30,4,50]

// for(let i = 0; i < data.length; i++){
// 	console.log(data[i])
// }


// for(let i of data){
//     console.log(i)
// 	console.log(data[i])
// }

// for(let i = 0; i < data.length; i++){
// 	if(data[i] >= 3) break;
// 	console.log(data[i])
// }

// for(const i of data){
// 	console.log(i)
// }

const data = [
	{day : "01/01/2022" , weather : "ร้อน" , temp : 30},
	{day : "02/01/2022" , weather : "ฝน" , temp : 25},
	{day : "03/01/2022" , weather : "ร้อนมาก" , temp : 38},
	{day : "04/01/2022" , weather : "ฝน" , temp : 26}
]

const weather = data.filter(element => {
	return element.temp > 25 & element.weather === "ฝน"
})

console.log(weather)