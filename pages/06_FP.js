const black = '\x1b[33m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const magenta = '\x1b[35m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';
const cl = console.log;

// With Shared State, the order in which function calls are made changes the result of the function calls
const x = {
  val: 2
};

const x1 = () => x.val += 1;

const x2 = () => x.val *= 2;

x1();

cl(x.val);  // 3

x2();

cl(x.val);  // 6

// This example is exatly equivalent to the above, except...
const y = {
  val: 2
};

const y1 = () => y.val += 1;

const y2 = () => y.val *= 2;

// ...the order of the function calls is reversed...
y2();
cl(y.val); // 4
y1();

//...which changes the resulting value:
cl(y.val); // 5