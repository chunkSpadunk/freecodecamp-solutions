function whatIsInAName(collection, source) {
    const resultArr = [];
    const sourceKeys = Object.keys(source);

    for (let i = 0; i < collection.length; i++) {
        let matches = 0;

        for (let j = 0; j < sourceKeys.length; j++) {
            if (
                collection[i].hasOwnProperty(sourceKeys[j]) &&
                collection[i][sourceKeys[j]] === source[sourceKeys[j]]
            ) {
                matches++;
            }
        }
        if (matches === sourceKeys.length) {
            resultArr.push(collection[i]);
        }
    }
    return resultArr;
}

console.log(
    whatIsInAName(
        [
            { first: "Romeo", last: "Montague" },
            { first: "Mercutio", last: null },
            { first: "Tybalt", last: "Capulet" },
        ],
        { last: "Capulet" }
    )
);
