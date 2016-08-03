const moveZeroes = nums => {
  let numZeroes = nums.filter((num) => num === 0).length;
  const nonZeroes = nums.filter((num) => num !== 0);
  let i = 0;
  for (; i < nonZeroes.length; i++) {
    nums[i] = nonZeroes[i];
  }

  for (; i < nonZeroes.length + numZeroes; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
