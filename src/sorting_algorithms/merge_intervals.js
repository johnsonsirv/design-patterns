function overlap(arr1, arr2) {
    if ((arr1[1] >= arr2[0]) && (arr2[1] >= arr1[0])) {
        return true
    }

    return false
}

function mergeIntervals(arr) {
    // sort the array so overlapping intervals wil be adjacent
    const sorted = arr.sort((a, b) => a[0] - b[0]) // sort ascending
    const result = [arr[0]];

    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];
        const lastInterval = result[result.length - 1];

        // if overlap
        if (overlap(current, lastInterval)) {
            lastInterval[1] = Math.max(lastInterval[1], current[1])
        } else {
            result.push(current)
        }
    }

    return result;
}

const arr = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(mergeIntervals(arr)); // [[1,6], [8,10], [15,18]]
console.log(mergeIntervals([[0,3], [2,5]])); // [[0, 5]]
console.log(mergeIntervals([[0,3], [2,5], [6,7]])); // [[0, 5], [6,7]]
console.log(mergeIntervals([[4,5], [3,4], [0,1], [1,2], [2,3]])); // [[0, 4]]]
