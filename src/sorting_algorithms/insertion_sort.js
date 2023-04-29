/**
 * Ideal for small datasets or datasets that are already mostly sorted.
 * Performs poorly on large datasets due to its time complexity of O(n^2).
 * Can be useful as a simple sorting algorithm for small datasets or as a sub-routine for other sorting algorithms.
 * @param {*} array 
 * @returns 
 */
function insertion_sort(array){
    for (let i = 1; i < array.length; i++) {
        const currentEl = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > currentEl) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentEl;
    }

    return array;
}

const arr = [8, 6, 4, 3, 5, 3, 2, 1];
const arr2 = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(insertion_sort(arr));