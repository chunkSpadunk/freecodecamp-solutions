function factorialize(num) {
    var factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
  }
  
  console.log(factorialize(5));

  // the code is working and this is the end of the code control instruction syntax