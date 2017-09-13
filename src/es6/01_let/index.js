//
// Both `var` and `let` are overridable
//
var myVar = 'foo';
let myLet = 'foo';

console.log('Root: value of `myVar` is: ', myVar);
console.log('Root: value of `myLet` is: ', myLet);

myVar = 'bar';
myLet = 'bar';

console.log('Root: value of `myVar` is: ', myVar);
console.log('Root: value of `myLet` is: ', myLet);

//
// The difference is the hoisting, `let` enables you to define the same variable name in a
// block scope without overriding possible other variables outside with the same name.
//
if (true) {
  let myVar = 'baz';

  console.log('Nested: value of `myVar` is: ', myVar);
}

console.log('Root: value of `myVar` is: ', myVar);
