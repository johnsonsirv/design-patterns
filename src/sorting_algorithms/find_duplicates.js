function find_duplicates_brute_force(arr1, arr2) {
    const duplicates = [];
    const loopMax = arr2.length >= arr1.length
        ? arr1.length
        : arr2.length

    for (let i = 0; i < loopMax; i++) {
        // array is sorted
        if (arr1[i] < arr2[0]) {
            console.log('no need, move on', i, arr1[i], arr2[0]);
            continue;
        }

        for (let j = 0; j < arr2.length; j++) {
            console.log('j=',j, 'i=',i);
            if (arr1[i] === arr2[j]) {
                duplicates.push(arr1[i])
            }
        }
    }

    return duplicates;
}

// const arr1 = [3, 6, 7, 8, 20] //N = 5
// const arr2 = [1, 2, 3, 5, 6, 7] // M = 6

// console.log(find_duplicates_brute_force(arr1, arr2));


// Case 1 M == N (same length of array)
function find_duplicates_1(arr1, arr2) {
    let i = 0;
    let j = 0;
    const duplicates = [];

    // take advantage of both arrays are  sorted
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            duplicates.push(arr1[i]);

            i += 1;
            j += 1;
        } else if (arr1[i] < arr2[j]) {
            i +=1;
        } else {
            j += 1;
        }

    }

    return duplicates;
}

// const arr1 = [1, 2, 3, 5, 6, 7] // N = 6
// const arr2 = [3, 6, 7, 8, 20, 21] //M = 6
// console.log(find_duplicates_1(arr1, arr2));


// Case 2 M > N - Running binary search on M N times
function find_duplicates_2(arr1, arr2) {
    const duplicates = [];

    for (const number of arr1) {
        if (bs(arr2, number) !== -1) {
            duplicates.push(number)
        }
    }

    return duplicates;
}

function bs(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            // position of the target is higher than mid, shift range above mid
            left = mid + 1;
        } else {
            // position of target is lower than mid, shift range below mid
            right = mid - 1;
        }
    }

    return -1
}

const arr1 = [1, 2, 3, 5, 6, 7] // N = 6
const arr2 = [3, 6, 7, 8, 20, 21, 25, 30, 35, 38, 41] //M = 6
console.log(find_duplicates_2(arr1, arr2));