// translate english to pig latin

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
        : str.concat("way");
}

console.log(translatePigLatin("consonant"));
