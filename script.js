//challenge #1
// const currentYear = new Date().getFullYear();
// const currentYear = 2022;

// function calculateAge(birthYear) {
//   console.log("If you were born in " + birthYear + ", you are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear) + " years old.");
// };

// calculateAge(1983);
// console.log("\n");

//challenge #2

// function celsius_to_fahrenheit(c){
// let c_to_f = ( (c*9) / 5 + 32   );
// console.log( c + "°C" + " is " + c_to_f + "°F." );
// };
// celsius_to_fahrenheit(30);
// console.log("\n");


// function fahrenheit_to_celsius(f){
//   //precise value of fahrenheit to celsius
// // let f_to_c =  ( (f-32) * 5/9 );
//   //rounded value of fahrenheit to celsisus
// let f_to_c = Math.round( ( (f-32) * 5/9 ) );
// console.log(f + "°F" + " is " + f_to_c + "\u00B0C" );
// }
// fahrenheit_to_celsius(90);
// console.log("\n");

// challenge #3

// function compareNumbers(n1, n2) {
//   if (n1 === n2) {
//     console.log("ERROR MESSAGE!:" + n1 + " is equal to " + n2);
//   } else if (n1 > n2) {
//     console.log(n1 + " is greater than " + n2);
//   } else if (n2 > n1) {
//     console.log( n2 + " is greater than " + n1);
//   } else if ( isNaN(n1) || isNaN(n2) ) {
//     console.log("ERROR MESSAGE!: One of your entries is not a number.");
//   } else {
//     console.log("🤖 Error detected. Please try again.");
//   }
// };

// compareNumbers(99, "cat");
// compareNumbers (1, 10);

//challenge #4
// function pluralize(n, word) {
//   if ( (n>=1) && (word=="sheep") || (word=="deer") || (word=="fish") ) {
//     console.log(n + " " + word);
//   } else if ( (n>1) && (word=="bus") || (word=="gas") ) {
//     console.log(n + " " + word + "es");
//   } else if (n>1) {
//     console.log(n + " " + word + "s");
//   } else {
//     console.log(n + " " + word);
//   }
//   // end of function
// };

// pluralize(1, "orange");
// pluralize(4, "orange");
// pluralize(10, "deer");
// pluralize(19, "bus");

// pluralize(1, "deer");



// function pluralize(n, word) {
//   if( (n>=1) && (word=="sheep") || (word == "deer") || (word=="fish") ) {
//     console.log(n + " " + word);
//   } else if (n>1) {
//     console.log( n + " " + word + "s" );
//   } else {
//     console.log(n + " " + word);
//   }
// };

// pluralize(1, "cat");
// pluralize(10, "pen");
// pluralize(5, "sheep");
// pluralize(8, "bus");
