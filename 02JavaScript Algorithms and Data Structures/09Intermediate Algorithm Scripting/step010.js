// sorted union write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays

function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }

    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
