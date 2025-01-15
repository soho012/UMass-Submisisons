function quickSort (nums) {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length -1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] < pivot){
            left.push(nums[i]);
        }

        else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
    2, 453, 546, 75, 67, 4342, 32
];

console.log(quickSort(nums));

