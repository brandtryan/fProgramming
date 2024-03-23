const black = '\x1b[33m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const magenta = '\x1b[35m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';
const cl = console.log;

cl(white, `Algebra function that doubles 'x'`);
cl(cyan, `f(x)=2x`);
cl(white, `To use the function we just provide value for 'x'`);
cl(cyan, `f(2)`);
cl(yellow, `In Algebra this means the exact same thing as 4. Any place you see f(2) you can replace it with 4`);
cl(white, `Converting Algebra function to javaScript function:`);
cl(cyan, `const double = x => x * 2`);
cl(white, `Result when x = 5`);

const double = x => x * 2;

cl(green, double(5));
cl(white, `So also in javaScript, double(5) means the exact same thing as 10`);
cl(green, `double(5) === 10`);
cl(green, double(5) === 10);

const highpass = (cutoff, value) => value >= cutoff;

cl(white, `Example of same input always being mapped to same output value`)
cl(cyan, `const highpass = (cutoff, value) => value >= cutoff`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);
cl(green, `highpass(5, 5); Result => ${highpass(5, 5)}`);

cl(white, `Example of many inputs always being mapped to same output value`)
cl(green, `highpass(5, 123); Result => ${highpass(5, 123)}`);
cl(green, `highpass(5, 6); Result => ${highpass(5, 6)}`);
cl(green, `highpass(5, 18); Result => ${highpass(5, 18)}`);
cl(red, `highpass(5, 1); Result => ${highpass(5, 1)}`);
cl(red, `highpass(5, 3); Result => ${highpass(5, 3)}`);
cl(red, `highpass(5, 4); Result => ${highpass(5, 4)}`);