const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
var submit = document.querySelector("#submit-button");
const result = document.querySelector("#result");


submit.addEventListener("click", () => clickHandler())

function clickHandler(){
  firstAngle = Number(angle1.value);
  secondAngle = Number(angle2.value);
  thirdAngle = Number(angle3.value);
  if(firstAngle + secondAngle + thirdAngle == 180){
    result.innerHTML = "It is a triangle!!"
  } 
  else{
    result.innerHTML = "It is not a triangle :("
  }
}