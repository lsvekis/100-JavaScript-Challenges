let inThrottle;
return function(...args) {
if (!inThrottle) {
fn(...args);
inThrottle = true;
setTimeout(() => inThrottle = false, limit);
}
};
}
const throttledLog = throttle(() => console.log("Throttled function executed!"), 1000);
window.addEventListener("scroll", throttledLog);