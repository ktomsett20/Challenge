
function submitHandler(event) {
  event.preventDefault()
  const formStuff = document.getElementsByClassName("form-control")
  const resultsStuff = document.getElementsByClassName('results-control')

  const startingValue = Number(formStuff[0].value); 
  const harryValue    = Number(formStuff[1].value); 
  const clientOne     =  Number(formStuff[2].value); 
  const clientTwo     =  Number(formStuff[3].value); 
  const clientThree   =  Number(formStuff[4].value); 

  const endingValue= resultsStuff[0].value;
  const profit=endingValue-startingValue;
  resultsStuff[1].value = (harryValue/startingValue)*profit+harryValue
  resultsStuff[2].value = ((clientOne/startingValue)*profit)*.70+clientOne
  resultsStuff[3].value = ((clientTwo/startingValue)*profit)*.70+clientOne
  resultsStuff[4].value =((clientThree/startingValue)*profit)*.70+clientOne


}
