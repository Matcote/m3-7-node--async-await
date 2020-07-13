# 3.7.0 - Review Promises

---

```js
const pauseFunction = () => {
  return new Promise(function (resolve, reject) {
    console.log('entering the promise(d) land');
    resolve('resolve');
    console.log('...in limbo...');
    reject('reject');
    console.log('shuffling off...');
  });
};
```

---

Let's make it pause now...

```js
const pauseFunction = () => {
  return new Promise(function (resolve, reject) {
    console.log('entering the promise(d) land');
    resolve('resolve');
    console.log('...in limbo...');
    reject('reject');
    console.log('shuffling off...');
  });
};
```

---

<img src='./assets/promise.png' />

---

[Next lecture: Async / Await](../lecture-1-async-await)
