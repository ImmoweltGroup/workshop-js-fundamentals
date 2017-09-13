//
// While `var` and `let` are overridable, `const` as the same suggests is a constant and therefore not overridable.
//
var myVar = 'foo';
const myConst = 'foo';

console.log('Root: value of `myVar` is: ', myVar);
console.log('Root: value of `myConst` is: ', myConst);

myVar = 'bar';

// Throws an exception error.
try {
  myConst = 'bar';
} catch (e) {
  console.error(e);
}

console.log('Root: value of `myVar` is: ', myVar);
console.log('Root: value of `myConst` is: ', myConst);

//
// As `let`, `const` is also scope hoisted, which enables you to define the same variable name in a
// block scope without overriding possible other variables outside with the same name.
//
if (true) {
  const myVar = 'baz';

  console.log('Nested: value of `myVar` is: ', myVar);
}

console.log('Root: value of `myVar` is: ', myVar);
