function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift())
        }
    }

    sorted.concat(left, right);
}

function merge_sort(array) {
    if (array.length <= 1) {
        return array;
    }

    
    const midpoint = Math.floor(array.length / 2)

    const left = array.slice(0, midpoint)
    const right = array.slice(midpoint);

    return merge(merge_sort(left), merge_sort(right))
}


const arr = [8, 6, 4, 3, 5, 3, 2, 1];
const arr2 = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(merge_sort(arr));