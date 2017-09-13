//
// Using the `.filter(fn)` method of the built in Array Constructor is the most simplest way of filtering an Array.
//
const objects = [{id: 0}, {id: 2}, {id: 6}];
const filteredObjects = objects.filter(obj => obj.id !== 2);

console.log('value of "filteredObjects" is: ', filteredObjects); // [{id: 0}, {id: 6}]
