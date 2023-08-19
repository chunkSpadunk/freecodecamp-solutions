function mutation(arr) {
    let firstString = arr[0].toLowerCase();
    let secondString = arr[1].toLowerCase();

    return Array.from(secondString).every((char) => firstString.includes(char));
}

console.log(mutation(["hello", "hey"]));
