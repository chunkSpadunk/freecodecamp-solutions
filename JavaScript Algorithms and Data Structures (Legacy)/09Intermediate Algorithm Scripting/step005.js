function spinalCase(str) {
    str = str.replace(/[\s_]/g, "-");
    str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
    str = str.toLowerCase();
    return str;
}

console.log(spinalCase("This Is Spinal Tap"));
