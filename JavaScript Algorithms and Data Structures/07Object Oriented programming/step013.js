function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change the code below this line
    eat: function () {
        console.log("this is the dog eatting");
    },
    describe: function () {
        console.log("this will be used to describe the dog");
    },
    numLegs: 2,
};
