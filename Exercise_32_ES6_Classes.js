constructor(name, age) {
this.name = name;
this.age = age;
}
greet() {
console.log(`Hello, I'm ${this.name}`);
}
}
let person = new Person("Diana", 32);
person.greet();