// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var valueLookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  // now we have converted the case statements to objects properties we can access them individually or as a group
  result = valueLookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");