const black = "\x1b[33m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";
const yellow = "\x1b[33m%s\x1b[0m";
const blue = "\x1b[34m%s\x1b[0m";
const magenta = "\x1b[35m%s\x1b[0m";
const cyan = "\x1b[36m%s\x1b[0m";
const white = "\x1b[37m%s\x1b[0m";

const cl = console.log;

// Functional Programming Concepts
// Lamda Calculus:
//  1. Functions are ALWAYS anonymous...
//    a. In javaScript, the right side of sum() function:
const sum = (x, y) => x + y;

cl(white, `A. In Lamda Calulus functions are always anonymous.`);
cl(white, `In javaScript the RIGHT side of the NON-ANONYMOUS function...`);
cl(cyan, `const sum = (x, y) => x + y;`);
cl(cyan, `"(x, y) => x + y"`);
cl(white, `... is the ANONYMOUS function expression.`);
cl();
cl(white, `NON-ANONYMOUS Function Executed:`);
cl(
  green,
  `sum(2, 3);
${sum(2, 3)}`
);
cl();
//    b. ...is the anonymous function expression:
cl(yellow, `ANONYMOUS Function Executed returns ITSELF:`);
cl(
  green,
  `(x, y) => x + y;
${(x, y) => x + y}`
);
cl();

//  2. Functions in Lambda Calculus are UNARY and only accept a SINGLE input. If you need more than one parameter, the function will take one input and return a new function that takes the next, and so on.
//    a. Transformation of an "n-aray" function to a UNIRARY function:
cl(
  white,
  `B. Functions in Lambda Calculus are UNARY and only accept a SINGLE input. If you need more than one parameter, as in the N-ARY function used above:`
);
cl(cyan, `(x, y) => x + y;`);
cl(
  white,
  `...the function will take one input and return a NEW function that takes the next, and so on, and is written like so:`
);
cl(cyan, `x => y => x + y;`);
cl(
  white,
  `...whereby the N-ARY function has been transformed to a UNARY function. Applying this transformation from a N-ARY function to a UNARY function is known as CURRYING.`
);
cl();
cl(red, `CURRIED functions are NOT SUPPORTED in vanilla javaScript!`);
cl();
cl(blue, `Summary:`);
cl(white, `N-ARY Version:`);
cl(cyan, `(x + y) => x + y;`);
cl(white, `UNARY (CURRIED) Version:`);
cl(cyan, `x => y => x + y;`);
cl(red, "CURRYING IS NOT SUPPORTED IN VANILLA JAVASCRIPT!");
cl();

cl(
  white,
  `C. Functions in javaScript are FIRST-CLASS: they can be used as inputs to other functions, and functions can return functions.`
);
cl();
cl(
  blue,
  `** Together the featuers of being ANONYMOUS, UNARY AND FIRST-CLASS provide a simple vocabulary for COMPOSING SOFTWARE using FUNCTIONS as the primary building block. **`
);
cl();

cl(
  white,
  `Classic function composition uses the output of one function as the input to another function:`
);
compose2 = f => g => x => f(g(x));
cl(white, `For example, the math function...`);
cl(magenta, `f . g`);
cl(white, `...can be written in javaScript as:`);
cl(cyan, `compose2 = f => g => x => f(g(x));`);
cl(
  yellow,
  `NOTE: The name "compose2" refers to the composition taking 2 functions as inputs`
);
cl();
cl(white, `Example of how you'd use it:`);
cl(yellow, `The two functions to be used as inputs in the composition:`);

double = (n = 0) => n * 2;
inc = (n = 0) => n + 1;

cl(
  cyan,
  `double = n => n * 2;
inc = n => n + 1;`
);
cl();

cl(white, "compose2 Executed where x = 3:");
cl(
  green,
  `compose2(double)(inc)(3)
${compose2(double)(inc)(3)}`
);
//    b. Functions are first-class, meaning functions can be used as inputs to other functions, and functions can return functions
//RETURN TO THIS
