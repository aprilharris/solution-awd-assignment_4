// // //CHALLENGE #1
// // //declare current year using 'Date' object & 'getFullYear()' method
// //const currentYear = new Date().getFullYear();
// // //declare current year manually 
// // const currentYear = 2023;


// // function calculateAge(birthYear) {
// //   // console.log("If you were born in " + birthYear + ", you are either " + (currentYear - birthYear -1) + " or " + (currentYear - birthYear) + " years old.")
// //   console.log(`If you were born in ${birthYear}, you are either ${currentYear - birthYear -1} or ${currentYear - birthYear} years old.`)
// //  };

// // calculateAge(2005);
// // console.log("\n");


// // //CHALLENGE #2
// // //CELSISUS TO FAHRENHEIT
//   function c_to_f(celsius) {
//     //create variable for celsius temp
//     let cTemp = celsius;
//     //create variable for conversion formula
//     let c_to_f_formula = cTemp * (9 / 5 + 32);
//     //create variable for console message
//     let result = `${cTemp}\xB0C = ${c_to_f_formula}\xB0F`;
//     //log results to console
//       console.log(result);
//   };

// // //FAHRENHEIT TO CELSISUS
//   function f_to_c(fahrenheit) {
//     // //create variable for fahrenheit temp
//     let fTemp = fahrenheit;
//     //create variable for conversion formula
//     let f_to_c_formula = (fTemp - 32) * 5 / 9;
//     // create variable for console message
//     let result = `${fTemp}\xB0F = ${f_to_c_formula}\xB0C`;
//     //log results to console
//       console.log(result);
//   };
    
//   // //CALL BOTH FUNCTIONS
//   c_to_f(90);
//   f_to_c(33);

// // CHALLENGE #3

// // function compareNumbers(n1, n2) {
// // 	if (n1 === n2) {
// // 		console.log(n1 + " is equal to " + n2);
    
// // 	} else if (n1 > n2) {
// // 		console.log(n1 + " is greater than " + n2);
    
// // 	} else if (n2 > n1) {
// // 		console.log(n2 + " is greater than " + n1);
    
// // 	} else if (isNaN(n1)) {
    
// // 		console.log("Sorry, but " + n1 + " is not a number.");
// // 	} else if (isNaN(n2)) {
// // 		console.log("Sorry, but " + n2 + "is not a number.");
// // 	} else {
// // 		console.log("🤖 Error detected. Please try again.");
// // 	}
// // };

// // compareNumbers(15, 51);
// // compareNumbers(15, "foo");


// //CHALLENGE #4
// /* In English, to pluralize a word, typically you just add an "s" at the end. Still, the English language has many irregular plural nouns. For example, "1 box" becomes "3 boxes." Additionally you have situations like "ox & oxen," "leaf & leaves," and "child & children." We'd probably have to build an entire JS library if we wanted a script that can properly pluralize every noun in the English language. Rather than do this, let's just write some code that pluralizes regular nouns and then, let's write some conditionals for a couple of idiosyncratic words."*/
// // function pluralize (n, word) {
// //   if (n != 1 && word != "sheep" && word != "goose" && word != "mouse" && word!=="salmon" && word!=="deer") {
// //     console.log(n + ' ' + word + `s`);
// //   } else if (n>1 && word=="sheep") {
// //     console.log(n+` `+ "sheep")
// //   } else if (n>1 && word=="goose") {
// //     console.log(n + ` ` + "geese");
// //   } else if (n>1 && word=="mouse"){
// //     console.log(n + ` ` + "mice");
// //   } else if (n>1 && word=="salmon") {
// //     console.log(n + ` ` + word);
// //   } else if (n>1 && word=="deer") {
// //     console.log(n + ` ` + word);
// //   } else {
// //     console.log (n + ` ` + word);
// //   }
// // };

// // pluralize (1, "cat");
// // pluralize (3, "cat");
// // pluralize (1, "sheep");
// // pluralize (3, "sheep");
// // pluralize (1, "goose");
// // pluralize (3, "goose");
// // pluralize (1, "mouse");
// // pluralize (3, "mouse");
// // pluralize (1, "salmon");
// // pluralize (3, "salmon");
// // pluralize (1, "deer");
// // pluralize (3, "deer"); */
