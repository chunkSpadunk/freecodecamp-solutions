// instanceof allows to compare an object to a constructor

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(4);
console.log(myHouse instanceof House);
