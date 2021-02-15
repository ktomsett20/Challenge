// Default date selector (todays date)
todaysDate();
let language = document.querySelector("html").lang

// ***
// Function Goal: If client has a witness appends questions to div
// Params: Expects event data to pull target to modify
// ***

function witnessChecker(event) {
  let witnessDiv = document.getElementById("witnessSwitch");
  let questions
  if(language ==="es"){
    questions=`<label for="">¿Cual es su primer nombre?</label>
    <input type="text" name="witnessFirstName" class="form-control" value="" required />
    <label for="">¿Cual es su apellido?</label>
    <input type="text" name="witnessLastname" class="form-control" required />
    <label for="">¿Cual es su numero de telefono?</label>
    <input type="text"name="witnessPhone" class="form-control" required />`
  } else{
    questions =`<label for="">What is their first name?</label>
    <input type="text" name="witnessFirstName" value="" class="form-control" required />
    <label for="">What is their last name?</label>
    <input type="text" name="witnessLastName" class="form-control" required />
    <label for="">What is their phone number?</label>
    <input type="text" name="witnessPhone" class="form-control" required />`
  }
  if (event.target.value==="Yes" && witnessDiv.style.display!=="flex") {
    witnessDiv.style.display = "flex";
    witnessDiv.innerHTML +=questions
  } else if(event.target.value==="No") {
    witnessDiv.style.display = "none";
    witnessDiv.innerHTML="";
  }
}

// ***
// Function Goal: If client has an attorney appends questions to div
// Params: Expects event data to pull target to modify
// ***

function attorneyChecker(event) {
  let lawyerDiv = document.getElementById("attorneySwitch");
  let questions
  if(language ==="es"){
    questions=`<label for="">¿Como se llama su abogada/abogado?</label>
    <input type="text" name="attorneyName" class="form-control" required />
    <label for="">¿Cuál es el nombre de la compania donde trabaja?</label>
    <input type="text" name="attorneyCompany" class="form-control" required />
    <label for="">¿Cuál es la dirección del sitio web de la compañia?</label>
    <input type="text" name="attorneySite" class="form-control" required />
  </div>`
  }
  else{
    questions= `<label for="">What is your attorney's name?</label>
    <input type="text" name="attorneyName" class="form-control" required />
    <label for="">What is the name of the company they work for?</label>
    <input type="text" name="attorneyCompany" class="form-control" required />
    <label for="">What is the companies website address?</label>
    <input type="text" name="attorneySite" class="form-control" required />`
  }

  if (event.target.value==="Yes" && attorneySwitch.style.display!=="flex") {
    lawyerDiv.style.display = "flex";
    lawyerDiv.innerHTML=(questions);
  } else if(event.target.value==="No") {
    lawyerDiv.style.display = "none";
    lawyerDiv.innerHTML="";
  }
}

// ***
// Function Goal: Submit data to displayJson function while converting the formData to JSON
// Params: Expects Event data for the whole form data
// ***

function submitHandler(event) {
  event.preventDefault()
  const formData = new FormData(event.target);
  let formObjectData = {};
  formData.forEach((value, key) => formObjectData[key] = value);
  let jsonData = JSON.stringify(formObjectData);
  displayJson(jsonData)
}

// ***
// Function Goal: Take JSON data and display it while removing all the forms
// Params: Expects data as JSON data
// ***

function displayJson(data){
  const showData = document.getElementById("replaceForm")
  showData.innerHTML=""
  showData.innerHTML=(`<h2>Json Data</h2>`)
  showData.style.alignItems = "flex-start"
  const pTag = document.createElement("p")
  pTag.textContent=data
  showData.appendChild(pTag)
  showData.style.overflow="auto"
}

// ***
// Function Goal: Get todays date and set it up as the default
// Params: None
// ***

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