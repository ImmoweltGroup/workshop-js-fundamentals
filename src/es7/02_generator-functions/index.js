function* myGeneratorFn() {
  yield 1;

  yield 2;

  return 3;
}

const generatorInstance = myGeneratorFn();

console.log(generatorInstance.next()); // {value:1, done:false}
console.log(generatorInstance.next()); // {value:2, done:false}
console.log(generatorInstance.next()); // {value:3, done:true}
