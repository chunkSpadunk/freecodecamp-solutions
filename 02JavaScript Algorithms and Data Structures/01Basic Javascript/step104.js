function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

// we will be replacing loops using recursion
sum([2, 3, 4], 1);

// if n <= 0 then the function should return 0
