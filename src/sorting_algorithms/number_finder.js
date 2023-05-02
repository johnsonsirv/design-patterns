function find_first(arr, targetNumber) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        
        if (arr[mid] === targetNumber) {
            firstOccurrence = mid;
            right = mid - 1; // continue binary search on left-side to find any first occurrence
        } else if (arr[mid] < targetNumber) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstOccurrence;
}

const arr = [200, 200, 200, 200, 500, 500, 500];
console.log(find_first(arr, 200))
console.log(find_first(arr, 500))
console.log(find_first(arr, 100))
console.log(find_first([], 500))