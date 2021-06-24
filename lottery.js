var num = prompt("กรอกเลขที่ต้องการ")
console.log(num)
var ran = Math.floor(Math.random() * 100) // 100 = 0 - 99 floor ==> ปักลง 9.99 = 9
var txt1 = "เลขที่ถูกรางวัลคือ : "
var txt2 = "เลขที่คุณทายคือ : "
var result1 = "ยินดีด้วยคุณถูกรางวัล" 
var result2 = "คุณไม่ถูกรางวัล"
console.log(ran)
if(num == ran){
    document.getElementById("show").innerHTML = result1
}else{
    document.getElementById("show").innerHTML = result2
}  
document.getElementById("guess").innerHTML = txt2 + num
document.getElementById("result").innerHTML = txt1 + ran
// document.getElementById ใช้แสดงผลไปยังหน้า HTML
// innerHTML = ใส่ code HTML ได้
// innerText = ใส่ได้แค่ข้อความ