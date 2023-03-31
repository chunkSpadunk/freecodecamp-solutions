function popShift(arr) {
	let popped = arr.pop("is", "not"); // Change this line
	let shifted = arr.shift("challenge", "completed"); // Change this line
	return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
