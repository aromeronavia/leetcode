/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let newLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      newLength--;
      nums.splice(i, 1);
      i--;
    }
  }

  return newLength;
};

console.log(removeDuplicates([1, 1, 1, 2, 2]));

module.exports = removeDuplicates;
