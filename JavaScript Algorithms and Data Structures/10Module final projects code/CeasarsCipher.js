// caesars cipher one of the simplest and most widely known ciphers is a caesars cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

function rot13(str) {
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        let decodedCharCode;

        if (charCode >= 65 && charCode <= 77) {
            decodedCharCode = charCode + 13;
        } else if (charCode >= 78 && charCode <= 90) {
            decodedCharCode = charCode - 13;
        } else {
            decodedCharCode = charCode;
        }
        decoded = decoded + String.fromCharCode(decodedCharCode);
    }

    return decoded;
}

console.log(rot13("SERR PBQR PNZC"));
