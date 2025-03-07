return new Promise((_, reject) => setTimeout(() => reject("Error occurred!"), 1000));
}
async function testAsync() {
try {
await faultyAsync();
} catch (error) {
console.log("Caught error:", error);
}
}
testAsync();