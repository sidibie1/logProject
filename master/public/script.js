//DROP DOWN MODIFY
document.addEventListener("click",e=>{
  let isDropDownButton = e.target.matches('[data-dropdown-button]')
  if(!isDropDownButton && e.target.closest('[data-dropdown]')!=null)return

  let currentDropDown
  if(isDropDownButton){
    currentDropDown = e.target.closest('[data-dropdown]')
    currentDropDown.classList.toggle('active');
  }
})

document.querySelectorAll('[data-dropdown].active').forEach(dropdown=>{
  if(dropdown === currentDropDown)return
  dropdown.classList.remove('active');
})

//DATA MODIFY
let socket = io();
let oneM = document.getElementById('one');

dataFile1='';
dataFile2='';
dataFile3='';
dataFile4='';
dataFile5='';
dataFile6='';
dataFile7='';
dataFile8='';


socket.on('A', function(msg1) {
  dataFile1 = msg1;
});
socket.on('B', function(msg1) {
  dataFile2 = msg1;
});
socket.on('C', function(msg1) {
  dataFile3 = msg1;
});  
socket.on('D', function(msg1) {
  dataFile4 = msg1;
});
socket.on('W', function(msg1) {
  dataFile5 = msg1;
});
socket.on('X', function(msg1) {
  dataFile6 = msg1;
});
socket.on('Y', function(msg1) {
  dataFile7 = msg1;
});  
socket.on('Z', function(msg1) {
  dataFile8 = msg1;
});  

function funcClick() {
  oneM.innerText = dataFile1
 }
function funcClickTwo() {
  oneM.innerText = dataFile2;
}
function funcClickThree() {
  oneM.innerText = dataFile3;
}
function funcClickFour() {
  oneM.innerText = dataFile4;
}
function funcClickFive() {
  oneM.innerText = dataFile5;
 }
function funcClickSix() {
  oneM.innerText = dataFile6;
}
function funcClickSeven() {
  if(dataFile7){
  oneM.innerText = dataFile7;
  }
  else{
    oneM.innerText = 'API 2 not running'
  }
}
function funcClickEight() {
  oneM.innerText = dataFile8;
}

//window.scrollTo(0, document.body.scrollHeight);
  