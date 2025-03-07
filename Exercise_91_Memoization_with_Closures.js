let cache = {};
return function(...args) {
let key = JSON.stringify(args);
if(cache[key]) {
return cache[key];
} else {
let result = fn(...args);
cache[key] = result;
return result;
}
};
}
function slowSquare(n) {
// Simulate heavy computation
return n * n;
}
const memoizedSquare = memoize(slowSquare);
console.log("Square:", memoizedSquare(5));