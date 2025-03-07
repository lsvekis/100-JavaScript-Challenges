const $$ = (selector) => document.querySelectorAll(selector);
console.log("Single Element:", $("#app"));
console.log("Multiple Elements:", $$("div"));