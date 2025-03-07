setTimeout(() => resolve(1), 1000);
})
.then(result => {
console.log("First result:", result);
return result * 2;
})
.then(result => console.log("Chained result:", result));