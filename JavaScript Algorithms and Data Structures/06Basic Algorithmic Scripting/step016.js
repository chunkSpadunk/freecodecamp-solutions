function chunkArrayInGroups(arr, size) {
    for (let i = 0; i < arr.length; i += size) {
        chunkSize = size;
        chunk = arr.slice(i, i + chunkSize);
        // splitting the array into the smallest chunks based on 2nd input
        // the main line will split in this section and we will use all this to maintain all that we need for this to work
        // this will be used to follow all that we need for this to work and then use all for the main lines that we will be using for this to maintain all the main workflows
    }
    return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
