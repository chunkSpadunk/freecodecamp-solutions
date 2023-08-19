// find the smallest common multiple of the provided parameters that can be evenly divided by both

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);

    return range.reduce((multiple, current) => lcm(multiple, current));
}

console.log(smallestCommons([1, 5]));
