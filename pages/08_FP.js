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
  `A HIGHER ORDER FUNCTION is a function that takes a function as an argument, or returns a function.`
);
cl();
cl(
  green,
  `FIRST ORDER FUNCTIONS don't take a function as an argument or return a function as output.`
);
cl();

const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};

// cl(green, censor(["oops", "gasp", "shout", "sun"]));
// cl();

const startsWithS = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWith("s")) filtered.push(word);
  }
  return filtered;
};

// cl(green, startsWithS(["oops", "gasp", "shout", "sun"]));

cl(green, `FIRST CLASS FUNCTIONS can be:`);
cl(white, `Assigned as an identifier(variable) VALUE`);
cl(white, `Assigned to property values`);
cl(white, `Passed as arguments`);
cl(white, `Returned from functions`);
cl();
cl(
  yellow,
  `We can use functions just like any other bits of data (numbers, strings, objects, etc.) in our programs, and that makes ABSTRACTION a lot easier.`
);
cl(
  yellow,
  `For instance, we can create a function that abstracts the process of iterating over a list and accumulating a return value by passing in a function that handles THE BITS THAT ARE DIFFERENT. We'll call that function the REDUCER.`
);
cl();
