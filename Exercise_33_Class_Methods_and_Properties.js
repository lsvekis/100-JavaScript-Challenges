constructor(width, height) {
this.width = width;
this.height = height;
}
area() {
return this.width * this.height;
}
}
let rect = new Rectangle(5, 3);
console.log("Area:", rect.area());