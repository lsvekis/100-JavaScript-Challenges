setTimeout(() => resolve("Promise fulfilled!"), 1000);
});
promise.then(result => console.log(result));