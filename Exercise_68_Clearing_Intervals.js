console.log("Repeating...");
}, 1000);
setTimeout(() => {
clearInterval(intervalId);
console.log("Interval cleared");
}, 5000);