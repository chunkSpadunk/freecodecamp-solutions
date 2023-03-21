const sum = (...args) => {  // we have used the spread operator in the function definition
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }     
  return total;
}
console.log(sum(1, 2, 3));

// the function can take any number of arguments