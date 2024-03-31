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
  blue,
  `JavaScript has the most important features needed for function programming:`
);
cl();
cl(green, `1. First Class Functions:`);
cl(
  white,
  `The ability to use functions as data values: pass functions as arguments, return functions, and assign functions to variables and object properties.`
);
cl();
cl(green, `2. Anonymous functions and concise lambda syntax:`);
cl(
  white,
  `x = x * 2 is a valid function expression in javaScript. Concise lambdas make it easier to work with higher-order functins.`
);
cl();
cl(green, `3. Closures:`);
cl(
  white,
  `A closure is the bundling of a function with its lexical environment. Closures are created at function creation time.
  
When a function is defined inside another function, it has access to the variable bindings in the outer function, even after the outer function exits.

Closures are how partial applications get their fixed arguments.

A fixed argument is an argument bound in the closure scope of a returned function:
In add2(1)(2), 1 is a fixed argument in the function returned by add2(1).`
);
cl();
cl(blue, `What Javascript is Missing`);
cl();
cl(red, `1. Purity:`);
cl(
  white,
  `In some FP languages, purity is ENFORCED by the language.
Expressions with SIDE-EFFECTS are not allowed.`
);
cl();
cl(red, `2. Immutability:`);
cl(white, `JavaScript allows mutation to happen in-place. For example:`);
cl();
cl(
  `const foo = {
  bar; 'baz'
};

foo.bar = 'qux'; // mutation`
);
cl();
cl(red, `3. Recursion:`);
cl(
  white,
  `Recursion is the ability for a function to reference itself for the purpose of iteration.
There ARE NO LOOPS like FOR, WHILE, or DO loops.`
);
cl();
cl(blue, `So How Do We Deal With These JavaScript shortcomings?!`);
cl();
cl(green, `Purity:`);
cl(white, `Compose PURE functions by convention.`);
cl();
cl(green, `Immutability:`);
cl(white, `Check that latest ECMAScript support for Immutability:`);

cl(magenta, `const`);
cl(magenta, `Array.prototype.with()`);
cl(magenta, `Array.prototype.toReversed()`);
cl(magenta, `Array.prototype.toSorted()`);
cl(magenta, `Array.prototype.toSpliced()`);
cl();
cl(green, `Recursion:`);
cl(
  white,
  `JavaScript technically supports recursion, but not tail call optimization.`
);
cl();
cl(blue, `What JavaScript Has that Pure Functional Languages Lack`);
cl(
  green,
  `The true strength of JavaScript is diversity of thought and users in the ecosystem.`
);
cl();
