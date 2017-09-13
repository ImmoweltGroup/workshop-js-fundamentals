// @flow

const multiply = (subject: number): number => subject * subject;
multiply(); // Error
multiply(2); // Works
multiply('Foo'); // Error

const multiplyOptional = (subject?: number = 0): number => subject * subject;
multiplyOptional(); // Works
multiplyOptional(2); // Works
multiplyOptional('Foo'); // Error
