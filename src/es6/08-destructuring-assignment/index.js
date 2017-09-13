const lyrics = ['head', 'shoulders', 'knees', 'and', 'toes'];

//
// The destructuring assignment creates constants for the first and second element and
// a new array of the remaining items.
//
const [foo, bar, ...remainingItems] = lyrics;

console.log('value of constant "foo" is: ', foo); // 'head'
console.log('value of constant "bar" is: ', bar); // 'shoulders'
console.log(remainingItems); // ['knees', 'and', 'toes']

//
// This is also possible on objects.
//
const obj = {myNumber: 2, someString: 'foo', baz: 6};

// Creates constants for the values of the given keys and
// a new object of the remaining properties.
const {myNumber, someString, ...remainingProperties} = obj;

console.log('value of constant "myNumber" is: ', myNumber); // 2
console.log('value of constant "someString" is: ', someString); // 'foo'
console.log(remainingProperties); // {baz: 6}
