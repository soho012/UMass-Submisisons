function selectionSort (nums) {
    for (let i = 0; i < nums.length; i++) {
        minIndex = i;
        
        for (let j = i +1; j < nums.length; j++){
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }

            if (minIndex !== i) {
                [nums[i], nums[minIndex]]=[nums[minIndex], nums[i]];
            }
        }
    }

    return nums;
}

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

console.log(selectionSort(nums));