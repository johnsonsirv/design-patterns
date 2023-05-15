function target_sum(arr, targetSum) {
    const result = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i];
        if (result.has(complement)) {
            const complementIndex = result.get(complement)
            return [complementIndex, i]
        }
        
        result.set(arr[i], i) //
    }

    return -1
}

console.log(target_sum([2, 7, 11, 34], 9)); // [0, 1]
console.log(target_sum([1, 2, 3, 5, 6, 7], 7)); // [0, 3]
console.log(target_sum([1, 2, 3, 6, 7], 17)); // -1