function diffArray(firstArray, secondArray) {
    const newArray = [];

    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exist in another array
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArray
                newArray.push(first[i]);
            }
        }
    }
    onlyInFirst(firstArray, secondArray);
    onlyInFirst(secondArray, firstArray);
    return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
