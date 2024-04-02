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
cl(blue, `Don't Be Afraid Of The Vocabulary`);
cl();
cl(green, `Pure Functions`);
cl(white, `Given the same inputs, always returns the same output`);
cl(white, `Has no side-effects`);
cl(
  white,
  `Has referential transparency (you can replace function call 
   with its resulting value without changing meaning of the program.)`
);
cl();
cl(green, `Function Composition`);
cl(
  white,
  `The process of combining two or more functions in order to produce a new function or perform some computation:`
);
cl(
  yellow,
  `The composition f . g (the dot means "composed with") is equivalent to f(g(x)) in JavaScript`
);
cl();
cl();
cl(green, `Avoid Shared State`);
cl(
  white,
  `Any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.`
);
cl(yellow, `Causes Race Conditions`);
cl(yellow, `The order functions are called are timing dependent.`);
cl();
cl(green, `Avoid Mutating State`);
cl(
  white,
  `A mutable object is any object which can be modified after it's created.`
);
cl();
cl();
cl(blue, `Immutability`);
cl();
cl(white, `Without it, the data flow in your program is lossy.`);
cl(white, `State history is abandoned.`);
cl(
  yellow,
  `Don't confuse "const" with immutability. The variable name can't be changed, but it does
not create immutable objects. You can still change the PROPERTIES of the object, which
makes it MUTABLE.`
);
cl(
  yellow,
  `Freezing Objects are only superficially immutable, as any objects contained within the frozen object ARE MUTABLE.`
);
cl();
cl(green, `Avoid Side Effects`);
cl(
  white,
  `Any application state change that is observable OUTSIDE THE CALLED FUNCTION OTHER THAN ITS RETURN VALUE.`
);
cl();
cl(yellow, `Modifying any external variable or object property`);
cl(yellow, `Logging to console`);
cl(yellow, `Writing to screen`);
cl(yellow, `Writing to the network`);
cl(yellow, `Triggering any external process`);
cl(yellow, `Calling any other functions with side-effects`);
cl();
cl(blue, `Reusability Through Higher Order Functions`);
cl();
cl(
  white,
  `FP tends to reuse a common set of functional utilities to process data.`
);
cl(
  white,
  `FP pulls off its generic utility trickery using HIGHER ORDER FUNCTIONS`
);
cl();
cl(
  white,
  `JavaScript has FIRST CLASS FUNCTIONS which allws us to treat functions as data:`
);
cl(yellow, `Assign them to variables`);
cl(yellow, `Pass them to other functions`);
cl(yellow, `Return them from functions`);
cl(yellow, `Etc.`);
cl();
cl(
  green,
  `A HIGHER ORDER FUNCTION is any function which takes a function as an argument, returns a function, or both.`
);
cl();
cl(white, `Higher Order Functions are often used for:`);
cl(
  yellow,
  `Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc.`
);
cl(yellow, `Create Utilities which an act on a wide variety of data types`);
cl(
  yellow,
  `Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition`
);
cl(
  yellow,
  `Take a list of functions and return some composition of those input functions`
);
cl();
cl(green, `Containers, Functors, Lists, and Streams`);
cl();
