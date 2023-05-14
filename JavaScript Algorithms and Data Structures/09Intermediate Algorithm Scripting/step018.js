// everything be true check if the predicate (second arguement) is truthy on all elements of a collection (first arguement)

function truthCheck(collection, pre) {
    let counter = 0;

    for (let c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    return counter == collection.length;
}

console.log(
    truthCheck(
        [
            { name: "Quincy", role: "Founder", isBot: false },
            { name: "Naomi", role: "", isBot: false },
            { name: "Camperbot", role: "Bot", isBot: true },
        ],
        "isBot"
    )
);
