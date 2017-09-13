//
// Defining default parameters for arguments is simple, just add a `=` and the default value after the argument name.
//
const multiply = (num = 0) => num * num;

// Returns 4
console.log(multiply(2));

// Returns 0
console.log(multiply());
