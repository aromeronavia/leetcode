// recursive
const moveZeroes = nums => {
  if (nums.length === 1) return nums;
  const start = 0;
  const end = nums.length;
  const medium = Math.ceil(end / 2);
  const a = moveZeroes(nums.slice(start, medium));
  const b = moveZeroes(nums.slice(medium, end));
  return merge(a, b);
};

const merge = (a, b) => {
  const result = [].concat(a.filter(_filterNonZeroes), b.filter(_filterNonZeroes));
  const zeroesA = a.filter(_filterZeroes);
  const zeroesB = b.filter(_filterZeroes);
  return result.concat(zeroesA, zeroesB);
};

const _filterZeroes = num => num === 0;

const _filterNonZeroes = num => num !== 0;

