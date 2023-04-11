function repeatStringNumTimes(str, num) {
  let mainString = "";
  for (let i = 0; i < num; i++) {
    mainString = mainString + str;
  }
  return mainString;
}

repeatStringNumTimes("abc", 3);

// for the purpose of this challenge do not use the built-in .repeat() method
// we need to store the string for the operation in a separate string variable n