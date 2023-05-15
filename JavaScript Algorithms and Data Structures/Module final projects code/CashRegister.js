// // cash register design a cash register drawer function that accepts purchase price as the first arguement, payment as the second arguement, and cash-in-drawer as the third arguement

// function checkCashRegister(price, cash, cid) {
//     const currencyUnits = {
//         PENNY: 0.01,
//         NICKEL: 0.05,
//         DIME: 0.1,
//         QUARTER: 0.25,
//         ONE: 1,
//         FIVE: 5,
//         TEN: 10,
//         TWENTY: 20,
//         "ONE HUNDRED": 100,
//     };

//     let changeDue = cash - price;
//     let totalCid = 0;
//     let cidCopy = JSON.parse(JSON.stringify(cid)).reverse();
//     let changeArray = [];

//     cidCopy.forEach((current) => {
//         let currentName = current[0];
//         let currentTotal = current[1];
//         let currentUnit = currencyUnits[currentName];

//         let currentAmount = 0;
//         while (changeDue >= currentUnit && currentTotal > 0) {
//             currentAmount = currentAmount + currentUnit;
//             changeDue = Math.round((changeDue - currentUnit) * 100) / 100;
//             currentTotal = Math.round((currentTotal - currentUnit) * 100) / 100;
//         }

//         if (currentAmount > 0) {
//             changeArray.push([currentName, currentAmount]);
//             totalCid = totalCid + currentAmount;
//         }
//     });

//     if (changeDue > 0) {
//         return { status: "INSUFFICIENT_FUNDS", change: [] };
//     } else if (totalCid === cash - price) {
//         return { status: "CLOSED", change: cid };
//     } else {
//         return { status: "OPEN", change: changeArray };
//     }
// }

// console.log(
//     checkCashRegister(19.5, 20, [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25],
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100],
//     ])
// );

// changing part of the above code and rewriting some of the aspects for better test case passing

const denominations = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let change = [];
    let totalCid = 0;

    for (let i = 0; i < cid.length; i++) {
        totalCid = totalCid + cid[i][1];
    }

    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCid === changeDue) {
        return { status: "CLOSED", change: cid };
    }
    cid = cid.reverse();

    for (let i = 0; i < denominations.length; i++) {
        let currentDenomination = denominations[i];
        let currentName = currentDenomination.name;
        let currentUnit = currentDenomination.val;
        let currentTotal = cid[i][1];
        let currentAmount = 0;

        while (changeDue >= currentUnit && currentTotal > 0) {
            currentTotal -= currentUnit;
            currentAmount = currentAmount + currentUnit;
            changeDue = Math.round((changeDue - currentUnit) * 100) / 100;
        }

        if (currentAmount > 0) {
            change.push([currentName, currentAmount]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
);
