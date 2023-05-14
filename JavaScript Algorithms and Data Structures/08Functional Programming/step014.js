function nonMutatingPush(original, newItem) {
    // Only change code below this line
    const newArray = original.concat(newItem);
    return newArray;
    // Only change code above this line
    // here we did not modify the original array
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));
