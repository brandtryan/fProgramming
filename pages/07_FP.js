const curry = require('lodash/curry');

const black = '\x1b[33m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const magenta = '\x1b[35m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';
const cl = console.log;

cl(red, `Color Legend:`);
cl(white, `  White:   Description`);
cl(yellow, ` Yellow:   Note`);
cl(cyan, `   Cyan:   Wrtten Code`);
cl(green, `  Green:   Executed Code`);
cl();

cl(white, `An array is an ordered list of values.`);
cl(yellow, `Array LITERAL notation:`);
cl(green, `[1, 2, 3];`);
cl();

cl(white, `Since it's an EXPRESSION it can be given a NAME:`);
const arr = [1, 2, 3];
cl(cyan, `const arr = [1, 2, 3];`);
cl(green, `arr; // ${arr}`);
cl();

cl(white, `An OBECT is a collection of key:value pairs.`);
cl(yellow, `Object LITERAL notation:`);
cl(green, `{
  key: 'value'
};`);
cl();

cl(white, `It also can be given a NAME:`);
const foo = {
  bar: 'bar'
};
cl(cyan, `const foo = {
  bar: 'bar'
}`);
cl();

cl(white, `Shortcut for assigning existing variables to object property keys of the same name:`);
const a = 'a';
const b = 'b';
const oldA = { a: a };
const oA = { a };
const oB = { b };
cl(cyan, `const a = 'a';
const b = 'b';
const oldA = { a: a };
const oA = { a };
const oB = { b };`);
cl();


cl(white, `Objects can be composed together into NEW objects using SPREAD operator:`);
const c = { ...oA, ...oB };
cl(cyan, `const c = { ...oA, ...oB };`);
cl(green, `c;`);
cl(green, c);
cl();

cl(white, `Objects can be composed together into NEW objects using ASSIGN:`)
const d = Object.assign({}, oA, oB);
cl(cyan, `const d = Object.assign({}, oA, oB);`);
cl(green, `d;`);
cl(green, d);
cl();


const [t, u] = ['a', 'b'];
cl(white, `Destructuring Array: extract values and assign to named variables:`);
cl(cyan, `const [t, u] = ['a', 'b'];`);
cl(green, `t: ${t}
u: ${u}`);
cl(cyan, `[t, u];`);
cl(green, [t, u]);
cl();

const blep = { blop: 'blop' };
cl(white, `Destructuring Object: extract values and assign to named variables:`);
cl(cyan, `const blep = { blop: 'blop' };`);
cl(yellow, `The following is equivalent to:
const blop = blep.blop;`);
const { blop } = blep;
cl(cyan, `const { blop } = blep;`);
cl(green, blop + ` // 'blop'`);
cl();

const tripEqalExample = 3 + 1 === 4;
cl(white, `You can compare values with the strict equality operator "triple equals":`);
cl(cyan, `tripEqualExample = 3 + 1 === 4;`);
cl(green, tripEqalExample);
cl();

const ternExample = 14 - 7 === 7 ? 'Yep!' : 'Nope.';
cl(white, `Ternary expressions let you ask a question using a comparator and evaluates to different answer based on its truthyness:`);
cl(cyan, `const ternExample = 14 -7 === 7 ? 'Yep!' : 'Nope.';`)
cl(green, ternExample);
cl();

cl(white, `The math function "f(x) = 2x", used in other equations is written as f(2), where we've substituted "2" for "x". The result is "4".`)
cl(yellow, `Therefore, "f(2)" has the exact same meaning as "4" in Math.`);
cl();

const double = x => x * 2;
cl(white, `In javaScript, the value of a function expression is the function ITSELF:`);
cl(cyan, `const double = x => x * 2;`);
cl(cyan, `double;`);
cl(green, `[Function: double]`);
cl(yellow, `You can see the function definition using the ".toString()" method:`);
cl(cyan, `double.toString();`);
cl(green, double.toString());
cl();

cl(white, `If you want to apply a function to some arguments, you must invoke it with a function call, which APPLIES a function to its ARGUMENTS and EVALUATES a RETURN VALUE.`);
cl(yellow, `Invoke a function using <functionName>(argument1, argument2, etc.)`);
cl(cyan, `double(2);`);
cl(green, double(2));
cl();

const orZero = (n = 0) => n;
cl(white, `Default Parameter Values - Identity function example (function which returns the same value you pass in)`);
cl(cyan, `const orZero = (n = 0) => n;`);
cl(white, `When you assign defaults, type inference tools (tern.js, Flow, TypeScript) can infer the type signature of your function`);
cl(cyan, 'orZero(5)');
cl(green, orZero(5));
cl();

const createUser = ({
  name = 'Anonymous',
  avatarThumbnail = '/avatars/anonymous.png'
}) => ({
  name,
  avatarThumbnail
});

cl(white, `javaScript functions can take object LITERALS as arguments and use destructuring assignment in the parameter signature to create NAMED ARGUMENTS`);
cl(cyan, `const createUser = ({
  name = 'Anonymous', // using default parameter feature
  avatarThumbnail = '/avatars/anonymous.png' // using default parameter feature
}) => ({
  name,
  avatarThumbnail
})`);

const george = createUser({
  name: 'George',
  avatarThumbnail: 'avatars/shades-emoji.png'
});

cl();
cl(cyan, `const george = createUser({
  name: 'George',
  avatarThumbnail: 'avatars/shades-emoji.png'
})`);
cl(green, `george;`);
cl(green, george);
cl();

const aTail = (head, ...tail) => tail;
cl(white, `the REST operator(...) gathers individual elements into an array:`);
cl(cyan, `const aTail = (head, ...tail) => tail;`);
cl(cyan, `aTail(1, 2, 3);`)
cl(green, aTail(1, 2, 3));
cl();

const shiftToLast = (head, ...tail) => [...tail, head];
cl(white, `SPREAD takes elements FROM an array to individual elements:`);
cl(cyan, `const shiftToLast = (head, ...tail) => [...tail, head];`);
cl(cyan, `shiftToLast(1, 2, 3);`);
cl(green, shiftToLast(1, 2, 3));
cl();

const highpass = cutoff => n => n >= cutoff;
const gt4 = highpass(4);

cl(white, `A curried function takes multiple parameters ONE AT A TIME, returns a FUNCTION that takes next PARAMETER, and so on, until the final value is RETURNED.`);
cl(cyan, `const highpass = cutoff => n => n >= cutoff;`);
cl(cyan, `const gt4 = highpass(4); // highpass() returns a NEW FUNCTION`);
cl(yellow, `gt4(6);`);
cl(green, gt4(6));
cl(yellow, `gt4(3);`);
cl(green, gt4(3));
cl();

const add3 = curry((a, b, c) => a + b + c);
cl(white, `Autocurry (from lodash) lets you curry functions automagically!`);
cl(cyan, `const add3 = curry((a, b, c) => a + b + c);`);
cl(yellow, `add3(1, 2, 3);`);
cl(green, add3(1, 2, 3));
cl(yellow, `add3(1, 2)(3);`);
cl(green, add3(1, 2)(3));
cl(yellow, `add3(1)(2, 3);`);
cl(green, add3(1)(2, 3));
cl(yellow, `add3(1)(2)(3);`);
cl(green, add3(1)(2)(3));
cl();

cl(white, `Function Composition is the process of passing the RETURN VALUE of one function as an ARGUMENT to another function.`)
cl(white, `Consider the following:`);
cl(cyan, `f(g(x))`);
cl(yellow, `1. x is evaluated`);
cl(yellow, `2. g() is applied to x`);
cl(yellow, `3. f() is applied to the RETURN VALUE of g(x)`);
cl(white, `Example:`);
const inc = n => n + 1;
cl(cyan, `const inc = n => n + 1;`);
cl(cyan, `inc(double(2));`);
cl(green, `Result: ` + inc(double(2)));
cl(white, `(The value 2 is passed into double(), which produces 4. 4 is passed into inc() which evaluates to 5.)`);
cl();

cl(white, `You can pass any expression as an argument to a function. The expression will be evaluated before the function is applied.`);
cl(cyan, `inc(double(2) * double(2));`);
cl(green, `Result: ` + inc(double(2) * double(2)));
cl();





