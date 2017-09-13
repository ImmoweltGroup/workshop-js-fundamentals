//
// Using the `.reduce(fn, initialValue)` method of the built in Array Constructor adds more flexability to the finalized value.
// In this example we filter out duplicate id's.
//
const objects = [{id: 0}, {id: 2}, {id: 6}, {id: 2}];
const initialValue = [];
const objectIds = objects.reduce((value, obj) => {
  const id = obj.id;

  if (value.includes(id) === false) {
    value.push(id);
  }

  return value;
}, initialValue);

console.log('value of "objectIds" is: ', objectIds); // [0, 2, 6]
