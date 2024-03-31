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
cl(blue, `What is a Function?`);
cl();
cl(
  white,
  `A function is a process which takes some input, called ARGUMENTS, and produces some output called a RETURN value. Functions may serve the following purposes:`
);
cl();
cl(green, `1. Mapping:`);
cl(
  white,
  `Produce some output based on given inputs. A function MAPS input values to output values.`
);
cl();
cl(green, `2. Procedures:`);
cl(
  white,
  `A function may be called to perform a sequence of steps, known as a procedure. This style of programming is called PROCEDURAL PROGRAMMING.`
);
cl();
cl(green, `3. I/O:`);
cl(
  white,
  `Some functions exist to communicate with other parts of the systems, such as the screen, storage, system logs, or network.`
);
cl();
cl(blue, `Mapping`);
cl();
cl(
  white,
  `Functions map input arguments to return values. For each set of inputs, the corresponding output is returned.`
);
cl();
cl(
  white,
  `For example, "Math.max()" takes numbers as arguments and returns the largest number:`
);
cl(cyan, `${Math.max(2, 8, 5)} // 8`);
cl();
cl(white, `Algebra function that doubles 'x':`);
cl(cyan, `f(x)=2x`);
cl();
cl(white, `To use the function we just provide value for 'x':`);
cl(cyan, `f(2)`);
cl();
cl(
  yellow,
  `In Algebra this means the exact same thing as 4. Any place you see f(2) you can replace it with 4`
);
cl();
cl(white, `Converting Algebra function to javaScript function:`);
cl(cyan, `const double = x => x * 2`);
cl();
cl(white, `Result when x = 5`);

const double = x => x * 2;

cl(green, double(5));
cl();
cl(white, `So also in javaScript, double(5) means the exact same thing as 10:`);
cl(green, `double(5) === 10`);
cl(green, double(5) === 10);
cl();
cl(blue, `Pure Functions`);
cl();
cl(yellow, `1. Given same inpute, will always return same output.`);
cl(yellow, `2. Produces NO SIDE EFFECTS.`);
cl();
cl(
  magenta,
  `REFERNTIAL TRANSPARENCY refers to expressions meaning EXACTLY the same thing as in:`
);
cl(green, `double(5) === 10`);
cl(green, double(5) === 10);
cl();
cl(
  magenta,
  `A dead giveaway that a function is impure is if it makes sense to call it WITHOUT USING ITS RETURN VALUE.`
);
cl();
cl(magenta, `PURE FUNCTIONS ARE COMPLETELY INDEPENDENT OF SHARED STATE.`);
cl();
cl();
cl(blue, `The Trouble with Shared State`);
cl();
cl(
  magenta,
  `Race Conditions, concurrency, or any sort of asynchronous operation cause the OUTPUT to be unpredictable, as it is dependent on a sequence of UNCONTROLLABLE EVENTS. This is IMPURE, as to be PURE, the output must ALWAYS be the SAME, and therefore, predictable.`
);
cl();
cl(blue, `Given Same Input, Always Return Same Output`);
cl();
cl(
  white,
  `Some functions rely on information other than the arguments you pass in to produce results. For example:`
);
cl();
cl(cyan, `Math.random();`);
cl(green, Math.random());
cl(cyan, `Math.random();`);
cl(green, Math.random());
cl(cyan, `Math.random();`);
cl(green, Math.random());
cl();
cl(
  yellow,
  `Even though we didn't pass any arguments in the function calls, they produced difference results, meaning that 'Math.random()' is NOT PURE.`
);
cl();
cl(
  magenta,
  `Many input values may map to the same output value and remain PURE`
);
cl();
const highpass = (cutoff, value) => value >= cutoff;

cl(white, `Example of same input always being mapped to same output value:`);
cl(cyan, `const highpass = (cutoff, value) => value >= cutoff`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);
cl();
cl(white, `Example of many inputs always being mapped to same output value:`);
cl(green, `highpass(5, 123); Result => ${highpass(5, 123)}`);
cl(green, `highpass(5, 6); Result => ${highpass(5, 6)}`);
cl(green, `highpass(5, 18); Result => ${highpass(5, 18)}`);
cl(red, `highpass(5, 1); Result => ${highpass(5, 1)}`);
cl(red, `highpass(5, 3); Result => ${highpass(5, 3)}`);
cl(red, `highpass(5, 4); Result => ${highpass(5, 4)}`);
cl();
cl(blue, `Pure Functions Produce No Side Effects`);
cl();
cl(white, `Which means that it can't alter any external state!`);
cl();
cl(blue, `Immutability`);
cl();
cl(
  white,
  `JavaScripts object arguments are REFERENCES, which means that if a function were to mutate a property on an object or array parameter, that would mutate state that is accessible outside the function. Pure functions must not mutate external state.`
);
cl();
