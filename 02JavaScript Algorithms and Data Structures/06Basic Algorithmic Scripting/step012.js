function frankenSplice(arr1, arr2, n) {
    // create a new array to avoid modifying the input arrays
    let newArray = arr2.slice();

    for (let i = 0; i < arr1.length; i++) {
        newArray.splice(n + i, 0, arr1[i]);
    }
    return newArray; // this will return the modified new array
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
