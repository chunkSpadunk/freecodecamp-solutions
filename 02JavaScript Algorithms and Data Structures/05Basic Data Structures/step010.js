function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
    // also can use ternary operators for this to be more efficient
    // return arr.indexOf(elem) >= 0 ? true : false;
    // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
