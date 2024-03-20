var arr = [1, 2, 3];
var foo = {
bar: 'bar'
}
var a = 'a';
var oA = { a };
var b = 'b';
var oB = { b };
var c = {...oA, ...oB }
var d = Object.assign({}, oA, oB);
var [t, u] = ['a', 'b'];
t
b
var blep = {
blop: 'blop'
};
var { blop } = blep
blop;
var myReducer = (state = {}, action = {} => {
var myReducer = (state = {}, action = {}) => {
var { type, payload } = action;
switch (type) {
case 'FOO': return Object.assign({}, state, payload);
default: return state;
}
};
var { blop: bloop } = blep;
bloop;
var double = x => x * 2;
var orZero = (n = 0) => n;
const createUser = ({
name = 'Anonymous',
avatarThumbnail = '/avatars/anonymous.png'
}) => ({
name,
avatarThumbnail
});
const george = createUser({
name: 'George',
avatarThumbnail: 'avatars/shades-emoji.png'
});
george
var aTail = (head, ...tail) => tail;
aTail(1,2,3);
const shiftToLast = (head, ...tail) => [...tail, head];
shiftToLast(1,2,3);
const highpass = cutoff => n => >= cutoff;
const highpass = cutoff => n => n >= cutoff;
const gt4 = highpass(4);
gt4(4)
const curry = (
f, arr = []
) => (...args) => (
a => a.length === f.length ?
f(...a) :
curry(f, a)
)([...arr, ...args]);
var add3 = curry((a, b, c) => a + b + c);
add3(1,2,3);
add3(1,2)(3);
add3(1)(2)(3)
var inc = n => n + 1;
inc(double(2));
inc(double(2) * double(2));
arr.map(double);
arr
arr.map(double).map(double);
[2, 4, 6].filter(gt4);
[2, 4, 6].filter(gt4).map(double);
var censor = words => {
var filtered = [];
for (let i = 0; { length } = words; i < length; i++) {
var censor = words => {
for (let i = 0, { length } = words; i < length; i++) {
var word = words[i];
if (word.length !== 4) filtered.push(word);
}
return filtered;
};
var censor = words => {
var filtered = [];
for (let i = 0, { length } = words; i < length; i++) {
var word = words[i];
if (word.length !== 4) filtered.push(word);
}
return filtered;
};
censor['oops', 'gasp', 'shout', 'sun']};
censor['oops', 'gasp', 'shout', 'sun']);
censor(['oops', 'gasp', 'shout', 'sun']);
var startsWithS = words => {
var filtered = [];
for (let i = 0, { length } = words; i < length; i++) {
let word = words[i];
if (word.startsWith('s')) filtered.push(word);
}
return filtered;
};
startsWithS(['oops', 'gasp', 'shout', 'sun']);
var reduce = (reducer, initial, arr) => {
let acc = initial;
for (let i = 0, { length } = arr; i < length; i++) {
acc = reducer(acc, arr[i]);
}
return acc;
};
reduce((acc, curr) => acc + curr, 0, [1,2,3];
reduce((acc, curr) => acc + curr, 0, [1,2,3]);
var filter = (
fn, arr
) => reduce((acc, curr) => fn(curr) ?
acc.concat([curr]) :
acc, [], arr
);
var censor = words => filter(
word => word.length !== 4,
words
);
censor(["oops", 'gasp', 'shout', 'sun'])
var startsWithS = words => filter(
word => word.startsWith('s'),
words
);
startsWithS(["oops", 'gasp', 'shout', 'sun'])
var gt3 = highpass(3);
[1, 2, 3, 4].filter(gt3);
var add = a => b => a + b;
var result = add(2)(3);
result
var inc = add(1);
inc(3);
var inc10 = add(10);
var inc20 = add(20);
inc10(3);
inc20(3);
inc(3);
var g = n => n + 1;
var f = n => n * 2;
var h = x => f(g(x));
h(20)
var compose = (f, g) => x => f(g(x));
compose(20);
compose.toString()