/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsInString = vowels.reduce(getVowelsInString(vowels), []);
};

const getVowelsInString = vowels => (acc, chr) => {
  if (vowels.include(chr)) acc.push(chr);
  return acc;
};
