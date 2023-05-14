// DNA pairing the character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };

    return str.split("").map((x) => [x, pairs[x]]);
}

console.log(pairElement("GCG"));
