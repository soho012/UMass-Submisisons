function quickSort (arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length -1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        }

        else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

console.log(pivot(arr1)); // 3
console.log(pivot(arr2)); // 4

console.log(arr1.slice(0, 3).sort((a, b) => a - b)); // [2, 3, 4]
console.log(arr1.slice(3).sort((a, b) => a - b)); // [5, 7, 8, 9, 10, 20]

console.log(arr2.slice(0, 4).sort((a, b) => a - b)); // [0, 2, 4, 5]
console.log(arr2.slice(4).sort((a, b) => a - b)); // [8, 10, 11, 12, 13, 16]