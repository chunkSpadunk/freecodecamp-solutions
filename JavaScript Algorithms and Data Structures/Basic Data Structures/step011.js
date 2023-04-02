function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	// using a for loop to search through every element of the array
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			newArr.push(arr[i]);
		}
	}
	// Only change code above this line
	return newArr;
}

console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		3
	)
);
