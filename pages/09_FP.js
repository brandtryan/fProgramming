const curry = require("lodash/curry");

const black = "\x1b[33m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";
const yellow = "\x1b[33m%s\x1b[0m";
const blue = "\x1b[34m%s\x1b[0m";
const magenta = "\x1b[35m%s\x1b[0m";
const cyan = "\x1b[36m%s\x1b[0m";
const white = "\x1b[37m%s\x1b[0m";
const cl = console.log;

cl();
cl(
  green,
  `A CURRIED FUNCTION is a function that takes multiple arguments ONE AT A TIME.`
);
cl();
cl(
  white,
  `Given a function with 3 parameters, the curried version will take one`
);
cl(
  white,
  `argument and return a function that takes the next argument, which returns`
);
cl(
  white,
  `a function that takes the third argument. The last function returns the result`
);
cl(white, `of applying the function to all of its arguments.`);
cl();
cl(
  cyan,
  `For example, given two numbers, a and b IN CURRIED FORM, return the sum of a and b:`
);
cl(
  cyan,
  `// add = a => b => Number
const add = a => b => a + b;`
);
cl();

const add = a => b => a + b;

cl(
  yellow,
  `To use it, we must apply both functions, using the function application
syntax. In JavaScript, THE PARENTHESES () AFTER THE FUNCTION REFERENCE
TRIGGERS FUNCTION INVOCATION. When a function returns another function, the
returned function can be immediately invoked by adding an extra set of parentheses:`
);

const result = add(2)(3);

cl(cyan, `const result = add(2)(3);`);
cl(green, result);
cl();
cl(
  white,
  `First, the function takes a, and then RETURNS A NEW FUNCTION, which then takes
b and returns the sum of a and b. EACH ARGUMENT IS TAKEN ONE AT A TIME.`
);
cl();
