function bubbleSort(nums) {
    const numLength = nums.length;
    let isSwapped;

    for (let i=0; i<numLength; i++){
        isSwapped = false;

            for (let j=0; j<numLength - i - 1; j++) {
                if (nums[j] > nums[j+1]) {
                    [nums[j], nums[j+1]] = [nums[j+1] , nums[j]];
                    isSwapped = true;
                }
            }

        if (!isSwapped)
            break;
    }

    return nums;
}

const sortedNums = bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 43, 42, 32]);
console.log(`Sorted Array: ${sortedNums}`);