function toCelsius(){
    let fahrenheit = prompt("input Fahrenheit")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("show").innerHTML = "celsius = " + value.toFixed(2) + " ํC"// toFixed(x) ==> x คือตนใทศนิยมที่ต้องการ
}
toCelsius()

function toFahrenheit(){
    let celsius = prompt("input Celsius")
    let value = (celsius * 9) / 5 + 32
    document.getElementById("show2").innerHTML = "fahrenehit = " + value.toFixed(2) + " F"
}
toFahrenheit()

function finish(){
    return "finish"
}
alert(finish())

function user(userName){
    return "hello " + userName
}
alert(user("world"))