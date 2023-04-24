function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
// add all of the properties of beagle to the array ownProps
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) ownProps.push(property);
    else prototypeProps.push(property);
}

console.log(ownProps);
console.log(prototypeProps);
