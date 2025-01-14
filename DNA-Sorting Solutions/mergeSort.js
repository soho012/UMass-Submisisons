function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    const results = [];

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++
        }
        else {
            results.push(arr2[j]);
            j++
        }
    }

    while (i<arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while (j<arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

console.log(mergeSort(nums));