let sum = 0
let qrt = prompt("จำนวน")
let num = prompt("จำนวนคนหาร")
for(var c = 1 ; c <= qrt ; c++){
    let price = prompt("ราคาสินค้าที่ " + c)
    document.getElementById("list").innerHTML += "รายการสินค้าที่ " + c + ": " + price + "บาท" + "<br>"
    sum = parseInt(sum)+ parseInt(price)
}
document.getElementById("num").innerHTML = "จำนวนคน = " + num
document.getElementById("avr").innerHTML = "เฉลี่ย = " + sum/num
document.getElementById("result").innerHTML = "ราคารวม = " + sum