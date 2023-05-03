function overlap(arr1, arr2) {
    if ((arr1[1] >= arr2[0]) && (arr2[1] >= arr1[0])) {
        return true
    }

    return false
}

function mergeIntervals(intervals) {
    // sort the array so overlapping intervals wil be adjacent
    const sorted = intervals.sort((a, b) => a[0] - b[0]) // sort ascending
    const result = [sorted[0]];

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


// Optimized for time - by removing the helper function & return early
// Optimized for space - by sorting original array in place
function mergedIntervalsOptimized(intervals) {
    // Clarifying questions
    // What is considered overlapping? Is having the same start as and end considered overlapping?
    // Are the intervals sorted by start value? 
    // How many intervals? 

    // Handle base cases
    if (intervals == null) {
        return null;
    } else if (intervals.length === 0) {
        return [];
    }

    // Sorting solution
    // O(NlogN) time complexity since we first sort the N intervals, then iterate over them to create the merged arrays
    // O(logN) space complexity for the sorting algorithm. Input and output arrays are not included in extra space complexity. Constant number of variables in addition
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    merged.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length-1];
        const current = intervals[i];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;    
}

const arr = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(mergedIntervalsOptimized(arr)); // [[1,6], [8,10], [15,18]]
console.log(mergedIntervalsOptimized([[0,3], [2,5]])); // [[0, 5]]
console.log(mergedIntervalsOptimized([[0,3], [2,5], [6,7]])); // [[0, 5], [6,7]]
console.log(mergedIntervalsOptimized([[4,5], [3,4], [0,1], [1,2], [2,3]])); // [[0, 4]]]
