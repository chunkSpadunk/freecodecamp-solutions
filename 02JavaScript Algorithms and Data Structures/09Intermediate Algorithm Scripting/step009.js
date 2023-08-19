// missing letters find the missing letter in the passed letter range and return it
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }

    return undefined;
}

console.log(fearNotLetter("abce"));
