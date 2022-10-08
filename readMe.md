## Class Assignment 4: JavaScript Coding Challenges
**Challenge 1: The Age Calculator**  
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Given that we do not know the birth month, calculate the 2 possibilities for the age. 
- Output to the screen like so: "They are either NN or NN", substituting the values.

**Challenge 2: Temperature Converter** 
In this activity, we are going to write two functions. The first function will convert Celsius to Fahrenheit. The second function will convert Fahrenheit to Celsius.  This way we can complain about the weather with our friends overseas.

_**C° to F°**: Multiply by 9, Divide by 5, then add 32._ 
_**F° to C°**: Subtract 32, Multiply by 5, then divide by 9._

_Unicode Characters_: To print the degrees symbol in JavaScript, we need to use the write "\u00B0" to represent the unicode character for the degrees symbol. 

**Challenge 3: Bigger Number**
Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. 
_Bonus_: Add error messages if the numbers are equal or cannot be compared. Don’t forget to test it! 

**Challenge 4: Pluralize**
Write a function `pluralize` that takes in two arguments, a number and a word, and returns the plural form. 
_For example_:

`pluralize(5, 'cat')`: '5 cats' 

`pluralize(7, 'turtle')`: '7 turtles'

_Bonus_: Make it handle a few collective nouns like "sheep" and "geese".

### Finished early?

**Temperature Converter: Using Math Functions** 
JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods later in the class. For now, know if you type `Math.random()`, you'll get a random number between 0 and 1.
Using this tool, update your Fahrenheit to Celsius temperature conversion program to do the following:
- Instead of inputting a value for the Fahrenheit temp, use `Math.random()` to generate a random temp between 0 and 100
- Have the program output: "It is NN°F today. That's NN°C."

**The Calculator:** 
Work on the following:  
- Write a function called **squareNumber** that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called **halfNumber** that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

- Write a function called **percentOf** that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
- 
- Write a function called **areaOfCircle** that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
- 
- _Bonus_: Round the result so there are only two digits after the decimal.
- 
- Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).