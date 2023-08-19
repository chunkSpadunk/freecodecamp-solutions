// drop it iterate through and remove each element starting from the first element

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});
