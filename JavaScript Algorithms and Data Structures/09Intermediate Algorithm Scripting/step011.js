// convert html entities in a string to their corresponding HTML entities

function convertHTML(str) {
    var temp = str.split("");

    for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }

    temp = temp.join("");
    return temp;
}

console.log(convertHTML("Dolce & Gabbana"));
