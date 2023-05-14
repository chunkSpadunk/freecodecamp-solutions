// find the sum of all the values in the array through finding the min and max

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sumBetween = 0;

    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

console.log(sumAll([1, 4]));
