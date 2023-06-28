// Returns a random integer from 1-6
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

// Returns the values of n Dice Rolls in an Array
function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}

// Returns the sum of nums
function sum(nums) {
    return nums.reduce((acc, curr) => acc + curr);
}

// named export
export { d6, getRolls, sum };