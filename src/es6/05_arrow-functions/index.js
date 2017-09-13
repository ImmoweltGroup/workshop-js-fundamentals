//
// Defining a new Class is relatively simple, the constructor is
// optional and if added will be executed upon initialization.
//
class Foo {
  constructor() {
    this.foo = 'foo';

    //
    // Arrow functions are on the first look just a shorter way to write functions,
    // but the real game-changer is that the context is bound to the parent,
    // which means you can access properties or methods from the parent `this`.
    //
    const speak = () => this.foo;
    console.log('return value of the arrow function is: ', speak());

    //
    // A regular function will not be able to return you the property,
    // but throws an error since the `this` scope is on it's own.
    //
    function scream() {
      return this.foo;
    }

    try {
      console.log('return value of the regular function is: ', scream());
    } catch (e) {
      console.error(e);
    }

    //
    // To have access to the parent `this` context, you would have to use the `.bind(this)` instruction.
    //
    function snore() {
      return this.foo;
    }
    console.log(
      'return value of the bound regular function is: ',
      snore.bind(this)()
    );
  }
}

const instance = new Foo();
