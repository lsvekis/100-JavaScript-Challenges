constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound.`);
}
}
class Dog extends Animal {
speak() {
console.log(`${this.name} barks.`);
}
}
let dog = new Dog("Max");
dog.speak();