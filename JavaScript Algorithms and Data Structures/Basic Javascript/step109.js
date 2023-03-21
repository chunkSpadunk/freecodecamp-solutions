function randomRange(myMin, myMax) {
    // Only change code below this line
    // generating random numbers between a range
    var result = 0;
    result = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    return result;
    // this will work because we are using a grouping operator
    // Only change code above this line
}

randomRange();
