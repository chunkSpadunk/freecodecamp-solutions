let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);
// ^ we will be using this character symbol to use a negating character set
