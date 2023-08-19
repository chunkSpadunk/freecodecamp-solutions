function confirmEnding(str, target) {
    var targetLength = target.length;

    // use substring to get the last characters of str
    var strEnding = str.substring(str.length - targetLength);
    if (strEnding === target) {
        return true;
    } else return false;
}

console.log(
    confirmEnding(
        "Walking on water and developing software from a specificatio are easy if both are frozen",
        "specification"
    )
);
