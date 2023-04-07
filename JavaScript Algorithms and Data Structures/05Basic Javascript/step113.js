// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return []; //  countdown of less than 0 should return an empty array
    } else {
        let arr = [];
        arr = countdown(n - 1);
        arr.unshift(n); //  use recursion to solve this problem to reverse display the countdown of the list
        return arr;
    }
}
console.log(countdown(5));
// Only change code above this line
