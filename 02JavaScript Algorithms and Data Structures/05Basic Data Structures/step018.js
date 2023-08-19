const users = {
    Alan: {
        online: false,
    },
    Jeff: {
        online: true,
    },
    Sarah: {
        online: false,
    },
};

function countOnline(allUsers) {
    // Only change code below this line
    let numberOfOnlineUsers = 0;
    for (let users in allUsers) {
        if (allUsers[users].online === true) {
            numberOfOnlineUsers++;
        }
    }
    return numberOfOnlineUsers;
    // Only change code above this line
}

console.log(countOnline(users));
