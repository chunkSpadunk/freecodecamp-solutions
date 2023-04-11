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

function countOnline(usersObj) {
	// Only change code below this line
	let result = 0;
	for (let users in usersObj) {
		if (usersObj[users].online === true) {
			result++;
		}
	}
	return result;
	// Only change code above this line
}

console.log(countOnline(users));
