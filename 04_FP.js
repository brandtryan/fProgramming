const black = '\x1b[33m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const magenta = '\x1b[35m%s\x1b[0m';
const Cyan = '\x1b[36m%s\x1b[0m';
const white = '\x1b[37m%s\x1b[0m';
const cl = console.log;

// Imperative and OOP programming requires mutation.
// Mutation is a change to data structure that happens in-place
// For example:
const foo = {
  bar: 'baz'
};

cl(green, foo.bar);
cl(white, `^^ Initial value of const object "foo" property "bar"`);

foo.bar = 'qux';

cl(green, foo.bar);
cl(white, `^^ Mutated value of const object "foo" property "bar"`);