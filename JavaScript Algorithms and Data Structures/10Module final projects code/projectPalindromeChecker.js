// this project is where we find the palindrome string and pass all the test cases

function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

//test cases of the project
console.log("eye");
console.log("Racecar");
console.log(palindrome("2A3*3a2"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
