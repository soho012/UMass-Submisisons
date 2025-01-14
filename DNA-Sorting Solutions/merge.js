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

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
console.log(merge(arr1,arr2));

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];
console.log(merge(arr3,arr4));

let arr5 = [3,4,5]
let arr6 = [1,2]
console.log(merge(arr5,arr6));