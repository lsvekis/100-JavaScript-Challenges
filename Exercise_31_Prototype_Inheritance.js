this.name = name;
}
Animal.prototype.speak = function() {
console.log(this.name + " makes a sound.");
};
let dog = new Animal("Buddy");
dog.speak();