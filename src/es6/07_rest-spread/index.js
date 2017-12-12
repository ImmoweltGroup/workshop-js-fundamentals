//
// Using the spread syntax `...variableName` makes it possible to concatenate/merge arrays or objects.
//
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

console.log(lyrics);

//
// The position of the spread defines the precedence over other values.
//
const obj = {foo: 2};
const result = {bar: 3, ...obj}; // {bar: 3, foo: 2}
const result2 = {...obj, foo: 4}; // {foo: 4}

console.log(result, result2);

//
// Use the spread syntax to pass all parameter to the super constructor.
//
class Bar {
  constructor(param1, param2) {
    constole.log(param1, param2);
  }
}

class Foo extends Bar {
  constructor(...rest) {
    super(rest);
  }
}

new Foo(1, 2); // 1 2
