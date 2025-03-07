function deepClone(obj){return JSON.parse(JSON.stringify(obj));}
console.log(deepClone({a:1,b:{c:2}}));