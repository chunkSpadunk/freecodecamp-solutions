function convertToRoman(num) {
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanNumeral = "";
    for (const symbol in lookupTable) {
        while (num >= lookupTable[symbol]) {
            romanNumeral = romanNumeral + symbol;
            num = num - lookupTable[symbol];
        }
    }

    return romanNumeral;
}

// test cases
console.log(convertToRoman(36));
console.log(convertToRoman(1984));
console.log(convertToRoman(3998));
