// Setup
// important the name of the object array recordCollection should not be changed since a copy of the array is used for passing the test cases
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (
        prop === "tracks" &&
        value !== "" &&
        records[id].hasOwnProperty("tracks") === false
    ) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records; //  records will contain the entire music collection records of the object array
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
