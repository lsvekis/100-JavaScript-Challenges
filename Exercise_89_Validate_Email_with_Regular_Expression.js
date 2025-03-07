let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return pattern.test(email);
}
console.log("Is valid:", isValidEmail("test@example.com"));