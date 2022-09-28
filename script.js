// ## Class Assignment 4: JavaScript Coding Challenges

console.log("\n\n*******CHALLENGE 1: AGE CALCULATOR********\n\n");
// **Challenge 1: The Age Calculator**  
// Forgot how old someone is? Calculate it!
// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Given that we do not know the birth month, calculate the 2 possibilities for the age. 
// - Output to the screen like so: "They are either NN or NN", substituting the values.

//SIDE NOTE RE: CHALLENGE 1:
//meet the new keyword: new
//meet the Date object: Date()
//meet the getFullYear() method
//i'm combining these 3 to create a variable called currentYear that stores the current year
//We can get the current year using the Date object and its getFullYear() method.
    // const currentYear = new Date().getFullYear();
//or you can just keep it simple and use:
  //const currentYear = 2022
//cool? ok, now on to the solution!:


//create variables
const currentYear = 2022;
let birthYear = 1928;

// // create the function
function calculateAge() {
  console.log("If you were born in " + birthYear + ", " + "you are either " + (currentYear - birthYear - 1) + " or " + (currentYear-birthYear) + ".");

};

// //call the function
calculateAge();

console.log("\n\n*******CHALLENGE 2: TEMP CONVERSION********\n\n");
/* **Challenge 2: Temperature Converter** 
 In this activity, we are going to write two functions. The first function will convert Celsius to Fahrenheit. The second function will convert Fahrenheit to Celsius.  This way we can complain about the weather with our friends overseas.

_**C° to F°**: Multiply by 9, Divide by 5, then add 32.
_**F° to C°**: Subtract 32, Multiply by 5, then divide by 9.

// _Unicode Characters_: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degrees symbol. */

//create a variable called "c"
//we'll use this variable to store the value of our celsius temperature
let c;

//next, let's assign a value to c
//in other words, enter the C° temperature you wish to convert
//we'll update c's value anytime we want to convert C° to F°
c=20;

//create a new variable called "c_to_f"
//let's make c_to_f equal to the C° to °F conversion formula
let c_to_f = (c * 9)/5 + 32;

// finally, let's print the result to the console
console.log("\n\n**Celsius to Fahrenheit**:");
console.log(c + '\u00B0C is ' + c_to_f + '\u00B0F');

//create a variable called "f"
//we'll use this variable to store the value of our fahrenheit temperature
let f;
//next, let's assign a value to f
//in other words, enter the F° temperature you wish to convert
//we'll update c's value anytime we want to convert F° to C°
f=83;

//create a new variable called "f_to_c"
//let's make f_to_c equal to the F° to °C conversion formula
let f_to_c = (f - 32)/9 * 5;
// finally, let's print the result to the console
console.log("\n\n**Fahrenheit to Celsius**:");
console.log(f + '\u00B0F is ' + c + '\u00B0C');


console.log("\n\n*******CHALLENGE 3: BIGGER NUMBER********\n\n");

// **Challenge 3: Bigger Number**
// Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. 
// _Bonus_: Add error messages if the numbers are equal or cannot be compared. Don’t forget to test it! 

function compareNumbers(n1, n2) {
  if (n1 === n2) {
    console.log(n1 + " is equal to " + n2);
  } else if (n1 > n2) {
    console.log (n1 + " is greater than " + n2);
  } else if (n2 > n1) {
    console.log(n2 + " is greater than " + n1);
  } else if ( isNaN(n1)) {
    console.log("Sorry, but " + n1 + " is not a number.");
  } else if (isNan(n2)) {
    console.log("Sorry, but" + n2 + "is not a number.");
   } else {
    console.log("🤖 Error detected. Please try again.");
  }
};

console.log( compareNumbers(0,19) );
console.log( compareNumbers(1.5,20) );
console.log( compareNumbers("cat",100) );
console.log( compareNumbers(Math.PI,41052) );
console.log( compareNumbers(.000000000000000000009,.03) );


console.log("\n\n*******CHALLENGE 4: PLURALIZE********\n\n");

// **Challenge 4: Pluralize**
// Write a function `pluralize` that takes in two arguments, a number and a word, and returns the plural form. 
// _For example_:

// `pluralize(5, 'cat')`: '5 cats' 

// `pluralize(7, 'turtle')`: '7 turtles'

// _Bonus_: Make it handle a few collective nouns like "sheep" and "geese".

/* side note: this solution is incomplete in that it does not account for irregular nouns such as knife/knives, puppy/puppies, etc.*/

function pluralize(n, word) {
  if ( (n > 1) && (word == "sheep") || (word == "geese") || (word == "deer") || (word == "fish") ) {
    console.log( n + " " + word);
  } else if ( (n>1) && (word == "bus") || (word == "gas") ) {
console.log(n + " " + word + "es")
  } else if ( (n>1)) {
    return n + " " + word + "s";
  }
  else {
    return n + " " + word;
}
};

console.log(pluralize(3, "pencil"));