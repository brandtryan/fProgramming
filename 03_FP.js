const black = '\x1b[33m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const magenta = '\x1b[35m%s\x1b[0m';
const Cyan = '\x1b[36m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';

const cl = console.log;

// Functional Programming Concepts
// Lamda Calculus:
//  1. Functions are ALWAYS anonymous...
//    a. In javaScript, the right side of sum() function:
const sum = (x, y) => x + y;
cl(white, `Non-Anonymous Function`)
cl(green, `"const sum = (x, y) => x + y;"`);

cl(white, `Non-Anonymous Function Executed`)
cl(green, `sum(2, 3) returns ${sum(2, 3)};`);

//    b. ...is the anonymous function expression:
cl(white, `Anonymous Function part of sum() Executed`)

cl(green, `(x, y) => x + y returns ${(x = 2, y = 3) => x + y};`);

//  2. "Unary" Functions only accept a SINGLE input
//    a. Transoformation of an "n-ray" function to a UNIRARY function:
//    b. Functions are first-class, meaning functions can be used as inputs to other functions, and functions can return functions
//RETURN TO THIS
cl(white, "Curried Version");
cl(green, `x => y => x + y`)
cl(white, "Curried Version Executed");
cl(green, `x => y => x + y returns ${(x = 2) => (y = 3) => x + y};`);


cl(white, `Using output of one function as input to another function`);
cl(yellow, `Composition of "compose2" function: compose2 = f => g => x => f(g(x));`);
compose2 = f => g => x => f(g(x));

double = n => n * 2;
inc = n => n + 1;

cl(white, "compose2 Executed");
cl(green, `${compose2(double)(inc)(3)}`)


