var check = document.getElementsByName("question1");
var button = document.querySelector("#submit-button");
const result = document.querySelector(".result");

const selector = {
  check1  : document.getElementsByName("question1"),
  check2  : document.getElementsByName("question2"),
  check3  : document.getElementsByName("question3"),
  check4  : document.getElementsByName("question4"),
  check5  : document.getElementsByName("question5"),
  check6  : document.getElementsByName("question6"),
  check7  : document.getElementsByName("question7"),
  check8  : document.getElementsByName("question8"),
  check9  : document.getElementsByName("question9"),
  check10 : document.getElementsByName("question10"),
}

const arr = [selector.check1, selector.check2, selector.check3, selector.check4, selector.check5, selector.check6, selector.check7, selector.check8, selector.check9, selector.check10 ];

const answers = ["a", "c", "a", "b", "a", "c", "a", "b", "b", "c"];

button.addEventListener("click", () => clickHandler());

function clickHandler(){
  count = 0;
  for(j = 0; j<arr.length; j++){
    for(i=0; i<arr[j].length; i++){
      if(arr[j][i].checked){
        if(arr[j][i].value == answers[j]){
          count++;
          break;
        }
      }
    }
  }
  result.innerHTML = "Your score is " + count;
  
}