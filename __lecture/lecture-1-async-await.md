# 3.7.1 - Async / Await

---

<blockquote>
  Async/Await is a long anticipated JavaScript feature that makes working with
  asynchronous functions much more _enjoyable_ and _easier to understand_. - It
  is built on top of Promises - is compatible with all existing Promise-based
  APIs.
</blockquote>

---

```js
const newPauseFunction = (sec) => {
  return new Promise(function (resolve) {
    console.log(`${sec}s pause`);
    setTimeout(() => resolve("resolve"), sec * 1000);
  });
};

newPauseFunction(1)
  .then(() => newPauseFunction(2))
  .then(() => newPauseFunction(3))
  .then(() => newPauseFunction(3))
  .then((data) => console.log(data));
```

_let's convert it to async/await_

```js
const handlePause = async () => {
  await newPauseFunction(1);
  await newPauseFunction(2);
  await newPauseFunction(3);
  const answer = await newPauseFunction(3);
  console.log(answer);
};

handlePause();
```

---

### Exercise

Convert the following to async/await

```js
transformText(string)
  .then((str) => allCaps(str))
  .then((str) => trimFirst(str))
  .then((str) => trimLast(str))
  .then((str) => replaceWithX(str))
  .then((str) => {
    console.log(str);
    return str;
  })
  .catch((err) => console.log(err));

//ANSWER
const handleTransform = async (string) =>{
  const 1 = await transformText(string);
  const 2 = await allCaps(1);
  const 3 = await trimFirst(2);
  const 4 = await trimLast(3);
  const 5 = await replaceWithX(4);
  console.log(5);
}
handleTransform('bacon');
```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
  try {
    console.log("Go");
    await newPauseFunction(1);
    await newPauseFunction(2);
    await newPauseFunction(3);
    await newPauseFunction(3);
    console.log("Stop");
  } catch (err) {
    console.log(err);
  }
};
asyncPause();
```
