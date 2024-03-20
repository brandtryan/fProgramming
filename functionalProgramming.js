const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const cl = console.log;

// Functional Programming Concepts
// Lamda Calculus:
//  1. Functions are ALWAYS anonymous...
//    a. In javaScript, the right side of
const sum = (x, y) => x + y;
cl(red, `Non-Anonymous Function`)
cl(yellow, `"const sum = (x, y) => x + y;"`);

cl(red, `Non-Anonymous Function Executed`)
cl(green, `sum(2, 3) returns ${sum(2, 3)};`);
//    b. ...is the anonymous function expression:
cl(red, `Anonymous Function part of sum() Executed`)

cl(green, `(x, y) => x + y returns ${(x = 2, y = 3) => x + y};`);

//  2. Functions only accept a SINGLE input ("UNARY")




// javaScript Anonymous function with TWO inputs (non-unary)

// javaScript Anonymous function with TWO inputs (non-unary)

