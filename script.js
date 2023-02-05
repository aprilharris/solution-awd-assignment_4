//celsisus to fahrenheit function
function c_to_f(celsius) {
  //create variable for celsius temp
  let cTemp = celsius;
  //create variable for conversion formula
  let c_to_f_formula = cTemp * (9 / 5 + 32);
  //create variable for console message
  let result = `${cTemp}\xB0C = ${c_to_f_formula}\xB0F`;
  //log results to console
    console.log(result);
}

//fahrenheit to celsius function
function f_to_c(fahrenheit) {
  //create variable for fahrenheit temp
  let fTemp = fahrenheit;
  //create variable for conversion formula
  let f_to_c_formula = (fTemp - 32) * 5 / 9;
  // create variable for console message
  let result = `${fTemp}\xB0F = ${f_to_c_formula}\xB0C`;
  //log results to console
    console.log(result);
} 

//pass parameters in & call both functions
c_to_f(90);
f_to_c(33);
