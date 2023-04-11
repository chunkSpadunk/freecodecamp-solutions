function titleCase(str) {
    const capitalizedString = str.split(" ");
    const updatedTitle = [];
    for (let st in capitalizedString) {
        updatedTitle[st] = capitalizedString[st][0].toUpperCase() + capitalizedString[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// return the capitalized version of the first character of each string
