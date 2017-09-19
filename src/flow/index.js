// @flow

const multiply = (subject: number): number => subject * subject;
multiply(); // Error
multiply(2); // Works
multiply('Foo'); // Error

const multiplyOptional = (subject?: number = 0): number => subject * subject;
multiplyOptional(); // Works
multiplyOptional(2); // Works
multiplyOptional('Foo'); // Error

//
// Declaring re-usable types is also possible, by prepending `export` in front of `type` you can
//
type MyArgType = string;

const concatenate = (subject: MyArgType) => subject + subject;

concatenate('Foo'); // Works
concatenate(2); // Error

//
// Exporting / Importing types is possible as well, for demonstration purposes the import is within the file,
// usually they should be at the top of the file so developers can easily scan all imported types / dependencies.
//
import type {ArrayOfNumbers, ObjectWithNumbers} from './types.js';

const foo = (foo: ArrayOfNumbers, bar: ObjectWithNumbers) => 2;

foo([2], {foo: 2}); // Works
