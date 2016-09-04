/**
 *
 * 217. Contains duplicate
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */
const containsDuplicate = (nums) => {
  const sortedNums = nums.sort();
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 2]));

module.exports - containsDuplicate;
