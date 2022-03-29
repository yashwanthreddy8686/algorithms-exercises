/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // return if base case is 0 or 1
  if (nums.length < 2) {
    return nums;
  }
  // break into two smaller arrays
  const mid = math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // call mergeSort on the two arrays
  const leftArr = mergeSort(left);
  const rightArr = mergeSort(right);

  // return the merge of left and right
  return merge(leftArr, rightArr);
};

const merge = (leftArr, rightArr) => {
  const resultArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      resultArr.push(leftArr.shift());
    } else {
      resultArr.push(rightArr.shift());
    }
  }

  return resultArr.concat(leftArr, rightArr);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
