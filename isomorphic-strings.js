/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const sArray = Array.from(s);
  const tArray = Array.from(t);

  const charactersMapS = sArray.reduce(_countCharacters, {});
  const charactersMapT = tArray.reduce(_countCharacters, {});
};

const _countCharacters = (acc, ch) => {
  if (acc[ch]) acc[ch] += 1;
  else acc[ch] = 1;
  return acc;
};

module.exports = isIsomorphic;
