console.log("hello world");

// This tutorial will cover many ways to use conditional statements in JavaScript.
// What are conditionals?

// Very often when you write code, you want to perform different actions for different decisions.
// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use "if' to specify a block of code to be executed, if a specified condition is true.
// Use "else" to specify a block of code to be executed, if the same condition is false.
// Use "else if" to specify a new condition to test, if the first condition is false.
// Use "switch" to specify many alternative blocks of code to be executed.

// We will also be using comparison and logical operators in our conditional statements.
// What are comparison operators?

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Lets start with a simple example.
// Uncomment the code below:

// if (1 == 1) {
//     console.log("They are equal!");
// } else {
//     console.log("They are not equal.");
// };

// Let's break it down:
// We declared our if statement and followed it with a set of brackets (parentheses)
// The brackets will hold our logical statement (where we will make our comparison)
// We never use a single "=" to compare objects, we will use "==" or "==="
// After our comparison we defined what will happen IF our comparison is TRUE
// We then follow  with an else statement
// Else statements do not use a comparison. they are meant to run if your previous comparisons are all false
// We then defined what will happen if our previous comparisons came out as false

// 1 is obviously equal to 1 so we get "They are equal!" in the console.
// So why did we use a "==" comparison operator?
// "==" is a looser comparison than "===" which is more strict.
// Lets see the difference between the two.
// Uncomment the code below:

// if (1 == "1") {
//     console.log("They are equal!");
// } else {
//     console.log("They are not equal.");
// };


// Now lets do this same statement but with "===" as our comparison operator.
// Uncomment the code below:

// if (1 === "1") {
//     console.log("They are equal!");
// } else {
//     console.log("They are not equal.");
// };


// Using "==" will convert any strings to numbers if possible for comparison.
// Using "===" will also compare the object type as well as checking if the objects are equal.
// For the most part we will want to use "===" as our conditional operator.

// We can use the "typeof" statement to check what the type of an object is.
// Uncomment the code below:

// console.log(typeof 1);
// console.log(typeof "1");
// console.log(typeof [1, 2, 3]);
// console.log(typeof true);


// typeof returns the type of object as a STRING. We can use type of in comparisons like so.
// Uncomment the code below:

// if (typeof "Hello World" === "string") {
//     console.log("It's a string!");
// } else {
//     console.log("It's not a string");
// };

// if (typeof 1 === "number") {
//     console.log("It's a number!");
// } else {
//     console.log("It's not a number");
// };


// We can also use a single statement comparison in our conditionals to check if items return the true statement.
// We use this method to check if objects exist or if they are true.
// Uncomment the code below:

// var sentence = "Check to see if I'm true!";

// if (sentence) {
//     console.log("It's true!");
// } else {
//     console.log("It's false.");
// };


// Lets talk about "<", ">", "<=", and ">=".
// These are the same as math operators that check for greater than, less than, greater than or equal to, and
// less than or equal to.
// Lets use some else if statements in our example
// Uncomment the code below:

// if (2 < 2) {
//     console.log("Less than");
// } else if (2 <= 2) {
//     console.log("less than or equal to");
// } else {
//     console.log("I don't know what I am comparing...");
// };


// The else if statement gives us an extra comparison. Lets see how that works by looping through an array.
// Uncomment the code below:

// var colorArr = ["red", "orange", "yellow", "green", "blue", "purple"];

// for (var i = 0; i < colorArr.length; i++) {
//     if (colorArr[i] === "red") {
//         console.log("It's red!", colorArr[i]);
//     } else if (colorArr[i] === "green") {
//         console.log("It's green!", colorArr[i]);
//     } else if (colorArr[i] === "blue") {
//         console.log("It's blue!", colorArr[i]);
//     } else {
//         console.log("I don't know what color this is...", colorArr[i]);
//     };
// };

// We can chain as many else if statements together as we want. Although, we generally don't want to
// chain many else if statements together.
// Instead, we can use a switch statement. Lets take a look.
// Uncomment the code below:

// var color = "blue";

// switch(color) {
//     case "red":
//         console.log("It's red!", color);
//     break;

//     case "orange":
//         console.log("It's orange!", color);
//     break;

//     case "yellow":
//         console.log("It's yellow!", color);
//     break;

//     case "green":
//         console.log("It's green!", color);
//     break;

//     case "blue":
//         console.log("It's blue!", color);
//     break;

//     case "purple":
//         console.log("It's purple!", color);
//     break;

//     default:
//     console.log("I don't know what color this is...", color);
// };

// Ok, This may seem like a lot of stuff going on, so lets break it down.
// First we declared a variable named color and gave it the value of "blue".
// This is the color we want to check for in our switch statement.
// Then, we declare our switch statement. We set "color" as our argument.
// "case" is where our comparison happens. We declare a value after each case statement
// to compare our argument to.
// Essentially we are writing out `if (color === red) {do something}`
// We decide we want to console log the color if the case is a match.
// After our code to be executed if our case is a match to our argument we use the "break" statement.
// "Break" will stop our switch statement once it finds a match.
// At the very bottom of the switch statement we have our "default" case.
// "Default" in a switch statement is our "else". If no case matches our argument, our default code will execute.

// Seems like a lot of work for one, simple comparison. And frankly, yes. Yes it is.
// Lets use a switch statement that will do different things depending on what type of object we get.
// Uncomment code below:

// var mixedArr = ["hello world", 5, false, "coding is fun", 7, mixedArr, true, "switch statement", -25, false];

// function multi(arr){
//     for (var i = 0; i < arr.length; i++) {
//         switch(typeof arr[i]) {
//             case "string":
//                 arr[i] = arr[i].split(" ");
//                 console.log("New array is: ", arr[i]);
//             break;

//             case "number":
//                 arr[i]++;
//                 console.log((arr[i]-1) + " now equals: " + arr[i]);
//             break;

//             case "boolean":
//                 arr[i] ? arr[i] = false : arr[i] = true;
//                 console.log(!arr[i] + " is now " + arr[i]);
//             break;

//             default:
//             console.log("Not A Valid Object!");
//             continue;
//         };
//     };
// };
// multi(mixedArr);

// We ran our switch in a loop to check the object type for each element in an array.
// If it is a number, we increased it's value by 1. If it is a string, we split that string at each word and make it an array with those words.
// If it is a boolean, we change it to the opposite boolean. And, finally, our default just lets us know when an object isn't valid and
// continues the loop.

// Now you are probably wondering what line 205 is all about. And that is an excellent question that brings us to the last segment of this tutorial.

// Line 205 is a "ternary operator". It is a quick way of doing a comparison and deciding what happens if it is true or false.
// Lets look at the syntax of a ternary operator.
// ` <expression to be compared> ? <what to do if the object is true> : <what to do if the object is false> `
// Lets look at an example.
// Uncomment the code below:

// var age1 = 27;
// var age2 = 18;
// var drinkingAge = 21;

// var overAge = age1 >= drinkingAge ? "Order a beer" : "Order a soda";
// console.log(overAge);
// var underAge = age2 >= drinkingAge ? "Order a beer" : "Order a soda";
// console.log(underAge);

// A quick note, we need to declare the ternary operator as a variable if we want to see the value it returns through a console.log.
// We made a comparison (the person's age compared to the drinking age) and if they were over the drinking age they
// order a beer.
// If they aren't, they order juice instead.
// We can also chain ternary operators together like an if, else if, else statement like so.
// Uncomment the code below:

// function chooseRed(color) {
//     return color === "red" ? console.log("Hooray it's red!")
//         : color === "blue" ? console.log("Ugh, I hate blue!")
//         : color === "green" ? console.log("Green is ok, I guess...")
//         : console.log("Do you even know what a color is???");
// };

// chooseRed("red");
// chooseRed("blue");
// chooseRed("green");
// chooseRed(1);