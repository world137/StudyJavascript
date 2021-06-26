const weather = true
const date = new Promise(function(resolve , reject){
    if(weather) {
        const dateDetails = {
            name : '123',
            locatetion: 'aaa',
            table: '1'            
        }
        resolve(dateDetails)
    }else{
        reject(new Error('Hello world'))
    }
})
const orderUber = function(deteDetails){
    const message = 'jhaeriohjdfpjnba'
    return Promise.resolve(message)
}

async function myDate() {
    try{
        let dateDetails = await date; // await รอ date
        let message = await outerHeight(dateDetails)
        console.log(message)
    }catch(error){
        console.log(error.message)
    }
}
(async () =>{
    await myDate()
})

async function fetchUsers(endpoint){
    const res = await fetch(endpoint)

    if(!res.ok){
        throw new Error(res.status)
    }

    let data = await res.json();

    return data
    // data = data.map(user => user.username)
    // console.log(data)

}

fetchUsers('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data.map(user => user.username)))
    .catch(err => console.log('dfnaodijfod' , error.message))