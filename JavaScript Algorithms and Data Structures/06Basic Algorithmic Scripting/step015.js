function mutation(arr) {
    var firstArray = arr[0].toLowerCase().split("");
    var secondArray = arr[1].toLowerCase().split("");

    var count = 0;
    for (var i = 0; i < secondArray.length; i++) {
        if (firstArray.indexOf(secondArray[i]) > -1) {
            count++;
        }
    }

    if (count == secondArray.length) {
        return true;
    } else {
        return false;
    }
}

mutation(["hello", "hey"]);
// modify the answer above and also important to rmeove the case because otherwise we will get an error when we are evaluating conditions like Hello and hello

/* 

indexOf returns the position of the first occurrence of a value in a string

code provided by the first solution
function mutation(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++){
            // here we will add the mutation array for the logic that is needed for the program
        }
    }
}

*/
