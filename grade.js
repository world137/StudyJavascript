var score = prompt("กรุณากรอกคะแนน")
if(score >= 80){
    document.getElementById("result").innerText = "grade = A" 
}else if(score >= 75 & score < 80){
    document.getElementById("result").innerText = "grade = B+"
}else if(score >= 70 & score < 75){
    document.getElementById("result").innerText = "grade = B"
}else if(score >= 60 & score < 65){
    document.getElementById("result").innerText = "grade = C+"
}else if(score >= 55 & score < 60){
    document.getElementById("result").innerText = "grade = C"
}else if(score >= 50 & score < 55){
    document.getElementById("result").innerText = "grade = D"
}else if(score < 50){
    document.getElementById("result").innerText = "grade = F"
}else{
    document.getElementById("result").innerText = "error"
}