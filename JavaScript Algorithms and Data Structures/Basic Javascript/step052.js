// declare the myGlobal variable below this line
let myGlobal = 10;
var oopsGlobal;

function fun1() {
  // assign 5 oopsGlobal here
  oopsGlobal = 5;
}

// only change the code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}
