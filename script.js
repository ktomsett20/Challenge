// Default date selector (todays date)
let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

let today = year + "-" + month + "-" + day;
document.getElementById("theDate").value = today;


function witnessChecker() {
  let witnessDiv = document.getElementById("witness-switch");
  if (document.getElementById("witness-checkbox").checked) {
    witnessDiv.style.display = "flex";
  } else {
    witnessDiv.style.display = "none";
  }
}

function lawyerChecker() {
  let lawyerDiv = document.getElementById("attorney-switch");
  if (document.getElementById("attorney-checkbox").checked) {
    lawyerDiv.style.display = "flex";
  } else {
    lawyerDiv.style.display = "none";
  }
}

function pabloIsBest(){
  let test=document.getElementsByClassName("test")
  test.style.display="none"
  console.log("some stuff here")
}
