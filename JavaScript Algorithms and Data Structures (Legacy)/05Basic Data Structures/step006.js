function htmlColorNames(arr) {
    // Only change code below this line
    startIndex = 0;
    amountToDelete = 2;
    arr.splice(startIndex, amountToDelete, "DarkSalmon", "BlanchedAlmond");
    // Only change code above this line
    return arr;
}

// the above solution works in the code editor but does not work as a solution in freecodecamp editor the following code will work for the solution
// arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

console.log(
    htmlColorNames([
        "DarkGoldenRod",
        "WhiteSmoke",
        "LavenderBlush",
        "PaleTurquoise",
        "FireBrick",
    ])
);
