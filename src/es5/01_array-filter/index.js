//
// Using the `.filter(fn)` method of the built in Array Constructor is the most simplest way of filtering an Array.
// If the callback returns a truthy value, the iterated element can be found in the resulting Array.
//
var objects = [{id: 0}, {id: 2}, {id: 6}];
var filteredObjects = objects.filter(function (obj) {
  return obj.id !== 2;
});

console.log('value of "filteredObjects" is: ', filteredObjects); // [{id: 0}, {id: 6}]
