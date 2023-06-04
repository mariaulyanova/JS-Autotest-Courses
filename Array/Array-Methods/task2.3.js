// SUMMING A SLICE
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// [9, 8, 7, 5, 11] => 24

// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Example
// sliceSum([1, 3, 2], 2) ➞ 4

// sliceSum([4, 2, 5, 7], 4) ➞ 18

// sliceSum([3, 6, 2], 0) ➞ 0

// Notes*
// If n is larger than the length of the array, return the sum of the whole array.

function sliceSum(arr, n) {
  if (arr.length >= n && n > 0) {
    return arr.slice(0, n).reduce((acc, currentValue) => acc + currentValue);
  } else if (arr.length < n) {
    return arr.reduce((acc, currentValue) => acc + currentValue);
  } else {
    return 0;
  }    
}

console.log(sliceSum([1, 3, 2], 2)); // 4
console.log(sliceSum([4, 2, 5, 7], 4)); // 18
console.log(sliceSum([3, 6, 2], 0)); // 0
console.log(sliceSum([3, 6, 2], 5)); // 11