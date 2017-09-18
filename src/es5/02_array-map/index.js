//
// Using the `.map(fn)` method of the built in Array Constructor is the most simplest way of re-formating an Array.
// The return value of the callback function will be found in the new Array.
//
const objects = [{id: 0}, {id: 2}, {id: 6}];
const objectIds = objects.map(obj => obj.id);

console.log('value of "objectIds" is: ', objectIds); // [0, 2, 6]
