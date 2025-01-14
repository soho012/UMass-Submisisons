function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let j = i - 1;

        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }

        // Insert the current element
        nums[j + 1] = current;
    }
    return nums;
}

// Example
let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

console.log(insertionSort(nums));