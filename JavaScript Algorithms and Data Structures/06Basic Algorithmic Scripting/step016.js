function chunkArrayInGroups(arr, size) {
    for (let i = 0; i < arr.length; i += size) {
        chunkSize = size;
        chunk = arr.slice(i, i + chunkSize);
        // splitting the array into the smallest chunks based on 2nd input
    }
    return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
