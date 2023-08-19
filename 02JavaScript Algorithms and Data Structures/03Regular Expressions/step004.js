let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // now using the i will now make the regex ignore the case
let result = fccRegex.test(myString);
console.log(result);
