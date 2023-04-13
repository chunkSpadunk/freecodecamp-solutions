// there are two different methods to get this solution
// method 1 to use arr.filter 
function bouncer(arr) {
    const result = arr.filter(Boolean);     //  should not change to use const
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));

// for this to work we need to remove all the falsy values from the array and see that we have the rest stored and set as per the main set of commands to see to it that it will work as intended

// method 2
function bouncerTwo(arr2) {
    const filteredArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i]) filteredArr.push(arr2[i]);
    }
    return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));