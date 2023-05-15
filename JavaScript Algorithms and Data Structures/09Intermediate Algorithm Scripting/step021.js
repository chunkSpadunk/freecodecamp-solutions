// map the debris return a new array that transforms the elements average altitude into their orbital periods(in secons)

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArray = [];

    const getOrbPeriod = function (object) {
        const c = Math.pow(earthRadius + object.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        return { name: object.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArray.push(getOrbPeriod(arr[elem]));
    }
    return newArray;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
