// sum all odd fibonacci numbers in the function

function sumFibs(num) {
    let previousNumber = 0;
    let currentNumber = 1;
    let result = 0;

    while (currentNumber <= num) {
        if (currentNumber % 2 !== 0) {
            result = result + currentNumber;
        }
        currentNumber = currentNumber + previousNumber;
        previousNumber = currentNumber - previousNumber;
    }

    return result;
}

console.log(sumFibs(4));
