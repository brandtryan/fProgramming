const { curry } = require("lodash");

const black = "\x1b[33m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";
const yellow = "\x1b[33m%s\x1b[0m";
const blue = "\x1b[34m%s\x1b[0m";
const magenta = "\x1b[35m%s\x1b[0m";
const Cyan = "\x1b[36m%s\x1b[0m";
const white = "\x1b[37m%s\x1b[0m";

const cl = console.log;

// Functional Programming Concepts
// Lamda Calculus:
//  1. Functions are ALWAYS anonymous...
//    a. In javaScript, the right side of product() function:
const product = (x = 0, y = 0) => x * y;
cl(`product(4, 5); ${product(4, 5)}`);

// Function Composition
// The classic function composition takes the output from
// one function and uses it as the input for another function.
compose2 = f => g => x => f(g(x));
// Here's how you'd use it:
double = n => n * 2;
triple = n => n * 3;
cl(green, compose2(triple)(double)(3)); //18

//  2. "Unary" Functions only accept a SINGLE input
//    a. Transoformation of an "n-ray" function to a UNIRARY function:
//    b. Functions are first-class, meaning functions can be used as inputs to other functions, and functions can return functions
//RETURN TO THIS
