//
// Creating a Promise is simple, just invoke the Constructor with the new keyword and
// write the asynchronous logic inside the callback.
//
// The callback gets invoked with a `resolve` function that you should execute once the asynchronous logic finished,
// and a `reject` function that you should call if something bad/an error happened.
//
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (!ms) {
      const err = new Error(
        'Please provide a positive number to the wait() fn.'
      );
      reject(err);
    }

    setTimeout(() => resolve(), ms);
  });
}

//
// The returned Promise has two methods which you can chain.
//
// `.then(fn)` which gets called once `resolve` gets executed.
// `.catch(fn)` which gets called once `reject` gets executed.
//
wait(2000)
  .then(() => {
    console.log('Stop, Hammertime!');

    return null;
  })
  .catch(console.error);
