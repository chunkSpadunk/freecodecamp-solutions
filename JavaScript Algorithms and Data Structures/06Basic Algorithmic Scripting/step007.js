// function repeatStringNumTimes(str, num) {
//     if (num < 1) {
//         return "";
//     } else if (num === 1) {
//         return str;
//     } else {
//         return str + repeatStringNumTimes(str, num - 1);
//     }
// }

// console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes(str, num) {
    var repeatString = "";
    if (num < 0) {
        return repeatString;
    }

    while (num > 0) {
        repeatString += str;
        num--;
    }
    return repeatString;
}

console.log(repeatStringNumTimes("abc", 3));
