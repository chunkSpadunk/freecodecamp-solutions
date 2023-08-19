function bouncer(arr) {
    const result = arr.filter(Boolean);
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
