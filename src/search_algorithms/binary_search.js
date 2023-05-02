function binary_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1
}

const arr = [1, 3, 5, 11, 22, 30, 57, 80];
console.log(binary_search(arr, 22)); // returns position