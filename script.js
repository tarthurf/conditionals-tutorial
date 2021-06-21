console.log("hello world");

// This tutorial will cover many ways to use  conditional statements in Java Script.
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

if (1 == 1) {
    console.log("They are equal!");
} else {
    console.log("They are not equal.");
};

// Let's break it down:
// We declared our if statement and followed it with a set of brackets (parentheses)
// The brackets will hold our logical statement (where we will make our comparison)
// We never use a single "=" to compare objects, we will use "==" or "==="
// After our comparison we defined what will happen IF our comparison is TRUE
// We then follow  with an else statment
// Else statments do not use a comparison. they are meant to run if your previous comparisons are all false
// We then defined what will happen if our previous comparisons came out as false

// 1 is ovbiously equal to 1 so we get "They are equal!" in the console.
// So why did we use a "==" comparison operator?
// "==" is a looser comparison than "===" which is more strict.
// Lets see the difference between the two.
// Uncomment the code below:

if (1 == "1") {
    console.log("They are equal!");
} else {
    console.log("They are not equal.");
};


// Now lets do this same statemnet but with "===" as our comparison operator.
// Uncomment the code below:

if (1 === "1") {
    console.log("They are equal!");
} else {
    console.log("They are not equal.");
};


// Using "==" will convert any strings to numbers if possible for comparison.
// Using "===" will also compare the object type as well as checking if the objects are equal.
// For the most part we will want to use "===" as our conditional operator.

// We can use the "typeof" statement to check what the type of an object is.
// Uncomment the code below:

console.log(typeof 1);
console.log(typeof "1");
console.log(typeof [1, 2, 3]);
console.log(typeof true);


// typeof returns the type of object as a STRING. We can use type of in comparisons like so.
// Uncomment the code below:

if (typeof "Hello World" === "string") {
    console.log("It's a string!");
} else {
    console.log("It's not a string");
};

if (typeof 1 === "number") {
    console.log("It's a number!");
} else {
    console.log("It's not a number");
};


// We can also use a single statement comparison in our conditionals to check if items return the true statment.
// We use this method to check if objects exist or if they are true.
// Uncomment the code below:

var sentence = "Check to see if I'm true!";

if (sentence) {
    console.log("It's true!");
} else {
    console.log("It's false.");
};


// Lets talk about "<", ">", "<=", and ">=".
// These are the same as math operators that check for grerater than, less than, greater than or equal to, and
// less than or equal to.
// Lets use some else if statments in our example
// Uncomment the code below:

if (2 < 2) {
    console.log("Less than");
} else if (2 <= 2) {
    console.log("less than or equal to");
} else {
    console.log("I don't know what I am comparing...");
};


// The else if statment gives us an extra comparison. Lets see how that works by looping through an array.
// Uncomment the code below:

var colorArr = ["red", "green", "blue"];

for (var i = 0; i < colorArr.length; i++) {
    if (colorArr[i] === "red") {
        console.log("It's red!");
    } else if (colorArr[i] === "green") {
        console.log("It's green!");
    } else {
        console.log("It's blue!");
    };
};