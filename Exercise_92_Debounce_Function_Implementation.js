let timeoutId;
return function(...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => fn(...args), delay);
};
}
const log = () => console.log("Debounced function executed!");
const debouncedLog = debounce(log, 500);
window.addEventListener("resize", debouncedLog);