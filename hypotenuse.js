var aSide = document.querySelector("#a-side");
var bSide = document.querySelector("#b-side");
var calculate = document.querySelector("#submit-button");
var result = document.querySelector(".result");

calculate.addEventListener("click", () => clickHandler());

function clickHandler(){
  a = Number(aSide.value);
  b = Number(bSide.value);
  
  c = a*a + b*b;
  d = Math.sqrt(c);
  result.innerHTML = "The hypotenuse of the triangle is " + d;
  
}