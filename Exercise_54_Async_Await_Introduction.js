return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncFunction() {
console.log("Waiting...");
await delay(1000);
console.log("Done waiting!");
}
asyncFunction();