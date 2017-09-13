let str1 = 'foo';
let str2 = str1.slice(0, 2);

console.log('value of "str1" is: ', str1);
console.log('value of "str2" is: ', str2);

let arr1 = ['foo'];
let arr2 = arr1.push('bar');

console.log('value of "arr1" is: ', arr1);
console.log('value of "arr2" is: ', arr2);

let obj1 = {foo: 2};
let obj2 = obj1;

obj1.bar = 3;

console.log('value of "obj1" is: ', obj1);
console.log('value of "obj2" is: ', obj2);
