const aSide = document.querySelector("#a-side");
const bSide = document.querySelector("#b-side");
const cSide = document.querySelector("#c-side");
const submit = document.querySelector("#submit-button");
const result = document.querySelector(".result")

submit.addEventListener("click", () => {
  a = Number(aSide.value);
  b = Number(bSide.value);
  c = Number(cSide.value);
  s = (a+b+c)/2;
  if(a+b>c && b+c>a && a+c>b){
     area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
     area = Number(area).toFixed(4);
     result.innerHTML = `<h3> The inner of the triangle is ${area} </h3>`
  }
  else{
    result.innerHTML = `<h3>It is not a triangle</h3>`
  }



})