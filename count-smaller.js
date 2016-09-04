/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const counts = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length ; j++) {
      if (nums[i] > nums[j]) {
        count += 1;
      }
    }
    counts.push(count);
  }

  return counts;
};

console.log(countSmaller([5,2,6,1]));
module.exports = countSmaller;
