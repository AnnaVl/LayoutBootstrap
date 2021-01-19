function changeBg() {
  document.querySelector("#click").style.backgroundColor = "#8CB044";
  document.querySelector("#txt").style.background= 'rgba(0, 120, 150,0.8)';

  var styleElem = document.head.appendChild(document.createElement("style"));

  styleElem.innerHTML = "#block:before {background: rgba(0, 120, 150,0.1)}";

}

function changeBg1() {
  document.querySelector("#click1").style.backgroundColor = "#8CB044";
  document.querySelector("#txt1").style.background= 'rgba(0, 120, 150,0.8)';

  var styleElem = document.head.appendChild(document.createElement("style"));

  styleElem.innerHTML = "#block1:before {background: rgba(0, 120, 150,0.1)}";
}

function changeBg2() {
  document.querySelector("#click2").style.backgroundColor = "#8CB044";
  document.querySelector("#txt2").style.background= 'rgba(0, 120, 150,0.8)';



  var styleElem = document.head.appendChild(document.createElement("style"));



  styleElem.innerHTML = "#block2:before {background: rgba(0, 120, 150,0.1)}";
}

function changeBg3() {
  document.querySelector("#click3").style.backgroundColor = "#8CB044";
  document.querySelector("#txt3").style.background= 'rgba(0, 120, 150,0.8)';


  var styleElem = document.head.appendChild(document.createElement("style"));

  styleElem.innerHTML = "#block3:before {background: rgba(0, 120, 150,0.1)}";
}
