function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
console.log(confirmEnding("Bastian", "n"));
// we got an ouput that this is true and we can verify by checking the string output in the console in free codecamp 
