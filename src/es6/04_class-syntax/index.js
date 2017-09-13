//
// Defining a new Class is relatively simple, the constructor is
// optional and if added will be executed upon initialization.
//
class Foo {
  constructor() {
    this.foo = 'foo';
  }

  speak() {
    return this.foo;
  }
}

//
// Extending a Class is possible by using the `extends` keyword followed by the Class to use as the base.
// As in some other languages you cannot extend multiple classes at once.
//
class Bar extends Foo {
  constructor() {
    super();

    this.bar = 'bar';
  }

  //
  // Overriding properties and methods is possible, you can access the
  // underlying property or method by using the `super` keyword.
  //
  speak() {
    return `${super.speak()} ${this.bar}`;
  }
}

const instance = new Bar();
const val = instance.speak();

console.log(val);
