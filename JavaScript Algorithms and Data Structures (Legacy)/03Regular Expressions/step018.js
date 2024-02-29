let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line this uses shorthand character set
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
