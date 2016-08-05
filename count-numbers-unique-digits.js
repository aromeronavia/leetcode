/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function(n) {
  const limit = Math.pow(10, n);
  let omittedNumbers = 0;
  for (let i = 1; i <= n; i++) {
    omittedNumbers += 9 * i;
  }

  return limit - omittedNumbers;
};

console.log(countNumbersWithUniqueDigits(1));

module.exports = countNumbersWithUniqueDigits;
