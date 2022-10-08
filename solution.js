//challenge #1
// const currentYear = new Date().getFullYear();
// const currentYear = 2022;


// function calculateAge(birthYear) {
//   console.log("If you were born in " + birthYear + ", you are either " + (currentYear - birthYear -1) + " or " + (currentYear - birthYear) + " years old.")
// };

// calculateAge(2005);
// console.log("\n");


//challenge #2
// let c = 32;
// let c_to_f = ( (c*9)/5 + 32);
// console.log(c +  "°C" + " is " + c_to_f + "°F");

// let f = 76;
// let f_to_c = ( (f - 32) / 9*5 );
// console.log(f + "°F" + " is " + f_to_c + "°C");
// console.log("\n");




// challenge #3

// function compareNumbers(n1, n2) {
// 	if (n1 === n2) {
// 		console.log(n1 + " is equal to " + n2);
    
// 	} else if (n1 > n2) {
// 		console.log(n1 + " is greater than " + n2);
    
// 	} else if (n2 > n1) {
// 		console.log(n2 + " is greater than " + n1);
    
// 	} else if (isNaN(n1)) {
    
// 		console.log("Sorry, but " + n1 + " is not a number.");
// 	} else if (isNaN(n2)) {
// 		console.log("Sorry, but " + n2 + "is not a number.");
// 	} else {
// 		console.log("🤖 Error detected. Please try again.");
// 	}
// };

// compareNumbers(15, 51);
// compareNumbers(15, "foo");



//challenge 4

function pluralize (n, word) {
  if (n != 1 && word != "sheep" && word != "goose" && word != "mouse" && word!=="salmon" && word!=="deer") {
    console.log(n + ' ' + word + `s`);
  } else if (n>1 && word=="sheep") {
    console.log(n+` `+ "sheep")
  } else if (n>1 && word=="goose") {
    console.log(n + ` ` + "geese");
  } else if (n>1 && word=="mouse"){
    console.log(n + ` ` + "mice");
  } else if (n>1 && word=="salmon") {
    console.log(n + ` ` + word);
  } else if (n>1 && word=="deer") {
    console.log(n + ` ` + word);
  } else {
    console.log (n + ` ` + word);
  }

  // //nouns with identical singular & plural forms
  // ( (word=="sheep") || (word=="salmon") || (word=="deer") )
};

pluralize (1, "cat");
pluralize (3, "cat");
pluralize (1, "sheep");
pluralize (3, "sheep");
pluralize (1, "goose");
pluralize (3, "goose");
pluralize (1, "mouse");
pluralize (3, "mouse");
pluralize (1, "salmon");
pluralize (3, "salmon");
pluralize (1, "deer");
pluralize (3, "deer");
