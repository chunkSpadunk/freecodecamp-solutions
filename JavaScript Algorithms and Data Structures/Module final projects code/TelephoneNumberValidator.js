// this project is for the telephone number validator return true if the passed string looks like a valid US phone number

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
