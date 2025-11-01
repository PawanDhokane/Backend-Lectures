//A module is simply a separate file that contains some code (like functions, variables, or classes) that you can import and reuse in another file.

// Here sum.js is our module that contains code for addition , substraction , greeting , we can import and use it here in app.js.

//A module is simply a separate file that contains some code (like functions, variables, or classes) that you can import and reuse in another file.
// Here sum.js is our module that contains code for addition , substraction , greeting , we can import and use it here in app.js.
const myModule  = require("./sum.js");

console.log(myModule.greet());

console.log(myModule.sum(1, 6));

console.log(myModule.subtract(9, 2));
