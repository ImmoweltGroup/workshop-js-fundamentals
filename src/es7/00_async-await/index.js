//
// The async function is like a regular function, but adds the `await` keyword to it's scope.
//
// `await` waits until the returned Promise gets resolved in a more declarative manner.
// Using a async/await function is way more readable and makes iterative async operations simpler.
//
async function fetchCommentIds() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();

  return comments.map(comment => comment.id);
}

//
// Since under the hood, an async function is like a regular function that returns a Promise,
// you can invoke it like a normal function.
//
fetchCommentIds()
  .then(commentIds =>
    console.log('invoking the async function regularly returned: ', commentIds)
  )
  .catch(console.error);

//
// Or you can declare another async function and invoke it immediately.
//
(async function() {
  let commentIds;

  try {
    commentIds = await fetchCommentIds();
  } catch (err) {
    console.error(err);
  }

  console.log(
    'invoking the async function in another async function returned: ',
    commentIds
  );
})();
