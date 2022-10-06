// ## Class Assignment 4: JavaScript Coding Challenges

// **Challenge 1: The Age Calculator**  
// Forgot how old someone is? Calculate it!
// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Given that we do not know the birth month, calculate the 2 possibilities for the age. 
// - Output to the screen like so: "They are either NN or NN", substituting the values.
// SIDE NOTE RE: CHALLENGE 1:
// meet the new keyword: new
// meet the Date object: Date()
// meet the getFullYear() method
// i'm combining these 3 to create a variable called currentYear that stores the current year
// We can get the current year using the Date object and its getFullYear() method.
// const currentYear = new Date().getFullYear();
// or you can just keep it simple and use:
// const currentYear = 2022
// cool? ok, now on to the solution!:


const currentYear = new Date().getFullYear();
// const currentYear = 2022;


function calculateAge(birthYear) {
  console.log("If you were born in " + birthYear + ", you are either " + (currentYear - birthYear -1) + " or " + (currentYear - birthYear) + " years old.");  
};

calculateAge(1961);
console.log("\n");



/* **Challenge 2: Temperature Converter** 
 In this activity, we are going to write two functions. 
 
 The first function will convert Celsius to Fahrenheit. The second function will convert Fahrenheit to Celsius.  This way we can complain about the weather with our friends overseas.

_**C° to F°**: Multiply by 9, Divide by 5, then add 32.
_**F° to C°**: Subtract 32, Multiply by 5, then divide by 9.

// _Unicode Characters_: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degrees symbol. */

// celsius to fahrenheit
let c = 32;
let c_to_f = (c * 9) / 5 + 32;
console.log(c + '\u00B0C is ' + c_to_f + '\u00B0F');

//fahrenheit to celsius
let f = 72;
let f_to_c = (f - 32) / 9 * 5;
console.log(f + '\u00B0F is ' + c + '\u00B0C');

console.log("\n");

// **Challenge 3: Bigger Number**
// Write a function that compares two numbers and returns the larger one. 
// Be sure to try it out with some different numbers. 
//   _Bonus_: Add error messages if the numbers are equal or cannot be compared. Don’t forget to test it! 

function compareNumbers(n1, n2) {
	if (n1 === n2) {
		console.log(n1 + " is equal to " + n2);
	} else if (n1 > n2) {
		console.log(n1 + " is greater than " + n2);
	} else if (n2 > n1) {
		console.log(n2 + " is greater than " + n1);
	} else if (isNaN(n1)) {
		console.log("Sorry, but " + n1 + " is not a number.");
	} else if (isNaN(n2)) {
		console.log("Sorry, but" + n2 + "is not a number.");
	} else {
		console.log("🤖 Error detected. Please try again.");
	}
};

compareNumbers(12,14);



// console.log("\n\n*******CHALLENGE 4: PLURALIZE********\n\n");
// **Challenge 4: Pluralize**
// Write a function `pluralize` that takes in two arguments, a number and a word, and returns the plural form. 
// _For example_:
// `pluralize(5, 'cat')`: '5 cats' 
// `pluralize(7, 'turtle')`: '7 turtles'
// _Bonus_: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize(n, word) {

  if( (n>1) && (word=="sheep") || (word == "deer") || (word=="fish") ) {
    console.log(n + " " + word);
  } else if (n>1) {
    console.log( n + " " + word + "s" );
  } else{
    console.log(n + " " + word);
  }
};

pluralize(3, "pencil");
pluralize(100, "deer");
pluralize(10, "cat");

// ### Finished early?
// console.log("\n\n*******CHALLENGE TEMP CONVERSION w/Math.random()*******");
// **Temperature Converter: Using Math Functions** 
// JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods later in the class. For now, know if you type `Math.random()`, you'll get a random number between 0 and 1.
// Using this tool, update your Fahrenheit to Celsius temperature conversion program to do the following:
// - Instead of inputting a value for the Fahrenheit temp, use `Math.random()` to generate a random temp between 0 and 100
// - Have the program output: "It is NN°F today. That's NN°C."

// let c = Math.random();
// let c_to_f = (c * 9) / 5 + 32;
// console.log("\n\n**Random Celsius to Fahrenheit**:");
// console.log(c + '\u00B0C is ' + c_to_f + '\u00B0F');

// let f = Math.random();
// let f_to_c = (f - 32) / 9 * 5;
// console.log("\n\n**Random Fahrenheit to Celsius**:");
// console.log(f + '\u00B0F is ' + c + '\u00B0C');

// console.log("\n\n*******CHALLENGE THE CALCULATOR*******");
// // **The Calculator:** 
// Work on the following:  
// - Write a function called **squareNumber** that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// console.log("SQUARE NUMBER:")
// function squareNumber(n) {
//   let sqNumber = n * n;
//   console.log(n + '² is ' + sqNumber);
//   return sqNumber;
// };

// // call the function
// squareNumber(5);

// // - Write a function called **halfNumber** that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// console.log("HALF NUMBER:");
// function halfNumber(h) {
//   let half = (h / 2);
//   console.log("Half of " + h + " is " + half);
//   return half;
// };

// halfNumber(99);

// // - Write a function called **percentOf** that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// console.log("PERCENT OF:");
// function percentOf(x, y) {
//   let percent = (x / y * 100);
//   console.log(x + ' is ' + percent + '% of ' + y);
//   return percent;
// };
// // call the function
// percentOf(10, 1000);
// percentOf(10, 1000);



// // - Write a function called **areaOfCircle** that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."


// console.log("AREA OF CIRCLE:");
// // formula: PI * r²

// function areaOfCircle(r) {

//   let area = Math.PI * (r * r);
//   // Bonus_: Round the result so there are only two digits after the decimal.
//   // area = (Math.PI * (r*r)).toFixed(2);
//   console.log('The area of circle with radius ' + r + ' is ' + area);
//   return area;
// };

// areaOfCircle(9);



// // - Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
// //   - Step1: Take half of the number and store the result.
// //   - Step2: Square the result of #1 and store that result.
// //   - Step3: Calculate the area of a circle with the result of #2 as the radius.
// //   - Step4: Calculate what percentage that area is of the squared result (#3).

// function multiFunction(num) {
//   let half = halfNumber(num);
//   let squared = squareNumber(half);
//   let area = areaOfCircle(squared);
//   let result = percentOf(squared, area);
  
//   console.log(result);
// }
// console.log(multiFunction(99) );
