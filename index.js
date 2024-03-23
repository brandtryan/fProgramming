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

cl(red, `Color Legend:`);
cl(white, `  White:   Description`);
cl(yellow, ` Yellow:   Note`);
cl(cyan, `   Cyan:   Wrtten Code`);
cl(green, `  Green:   Executed Code`);
cl();
