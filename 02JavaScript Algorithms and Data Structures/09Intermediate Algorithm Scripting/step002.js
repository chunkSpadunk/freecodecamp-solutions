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
    function appMain(thisFirstArray, thisSecondArray) {
        // this will set all the main statements of this array in the same file of this setting that we will be using for the rest of the main sytnax all this while
    }
    onlyInFirst(firstArray, secondArray);
    onlyInFirst(secondArray, firstArray);
    return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
