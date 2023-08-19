// arguements optional create a function that sums two arguements together. if only one argument is provided, then return a function that expects one arguement and returns the sum

function addTogether() {
    const [first, second] = arguments;

    if (typeof first === "number") {
        if (typeof second === "number") return first + second;
        if (arguments.length === 1)
            return (second) => addTogether(first, second);
    }
}

console.log(addTogether(2, 3));
