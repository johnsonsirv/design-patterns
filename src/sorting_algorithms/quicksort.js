/**
 * Ideal for large datasets, 
 *  dataset is unordered or randomly ordered.
 * Performs well on average, 
 * has worst-case time complexity of O(n^2) in some cases.
 * standard sorting algorithm for many programming languages and libraries.
 * @param {*} array 
 * @returns 
 */
function quicksort(array) {

    if (array.length <= 1){
        return array;
    }

    const left = [];
    const right = [];
    const pivot = array[0];

   
    for(let i = 1; i <= array.length - 1; i++) {
        if (pivot > array[i]) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return  [...quicksort(left), pivot, ...quicksort(right)]
}

const arr = [8, 6, 4, 3, 5, 3, 2, 1];
const arr2 = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quicksort(arr));