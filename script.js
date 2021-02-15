// Default date selector (todays date)
todaysDate();
let language = document.querySelector("html").lang
console.log(language)

function witnessChecker(event) {
  let witnessDiv = document.getElementById("witnessSwitch");
  console.log(witnessDiv)
  let questions =`<label for="">What is their first name?</label>
  <input type="text" name="witnessFirstName" class="form-control" required />
  <label for="">What is their last name?</label>
  <input type="text" name="witnessLastname" class="form-control" required />
  <label for="">What is their phone number?</label>
  <input type="text" name="witnessPhone" class="form-control" required />`
  if(language ==="es"){
    questions=``
  }

  if (event.target.value==="Yes" && witnessDiv.style.display!=="flex") {
    witnessDiv.style.display = "flex";
    witnessDiv.innerHTML +=questions
  } else if(event.target.value==="No") {
    witnessDiv.style.display = "none";
    witnessDiv.innerHTML=""
  }
}

function lawyerChecker(event) {
  let lawyerDiv = document.getElementById("attorney-switch");
  let questions = `<label for="">What is your attorney's name?</label>
  <input type="text" name="attorneyName" class="form-control" value=" "  required />
  <label for="">What is the name of the company they work for?</label>
  <input type="text" name="attorneyCompany" class="form-control" value=" "  required />
  <label for="">What is the companies website address?</label>
  <input type="text" name="attorneySite" class="form-control" value=" "  required />`


  if (event.target.value==="Yes" && attorneySwitch.style.display!=="flex") {
    lawyerDiv.style.display = "flex";
  } else {
    lawyerDiv.style.display = "none";
  }
}

function submitHandler(event) {
  event.preventDefault()
  const formData = new FormData(event.target);
  let formObjectData = {};
  formData.forEach((value, key) => formObjectData[key] = value);
  let jsonData = JSON.stringify(formObjectData);
  console.log(jsonData)
}

function todaysDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  
  let today = year + "-" + month + "-" + day;
  document.getElementById("theDate").value = today;
  }



