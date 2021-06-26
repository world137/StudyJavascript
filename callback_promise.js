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

// ถ้า true ทำอย่างนึงถ้า false ทำอย่างนึง ตามเงื่อนไขใน function ==> resolve reject
const orderUber = function(deteDetails){
    const message = 'jhaeriohjdfpjnba'
    return Promise.resolve(message)
}

// promise chain
const myDate = function(){
    date
        .then(function(done){
            console.log("aaaaaaaaaaaaaaaa")
            console.log(done)
        })
        .catch(function(error){
            console.log('bbbbbbbbbbbbbbbb')
            console.log(error)
        })
}