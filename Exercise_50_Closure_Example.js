let counter = 0;
return function() {
counter++;
console.log("Counter:", counter);
};
}
const increment = outer();
increment();
increment();