/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const sOcurrences = _getOcurrences(s);
  for (let i = 0; i < s.length; i++) {
    if (sOcurrences[s[i]] === 1) return i;
  }
  return -1;
};

const _getOcurrences = string => {
  const array = Array.from(string);
  return array.reduce(_countStringOcurrences, {});
};

const _countStringOcurrences = (acc, character) => {
  if (acc[character]) acc[character]++;
  else acc[character] = 1;
  return acc;
};

describe('Find first uniq character', () => {
  it('should find the first unique character index', () => {
    const s = 'leetcode';
    expect(firstUniqChar(s)).to.be.equal(0);
  });

  it('should find the first unique character index', () => {
    const s = 'loveleetcode';
    expect(firstUniqChar(s)).to.be.equal(2);
  });
});
module.exports = firstUniqChar;
