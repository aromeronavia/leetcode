/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const ransomNoteOcurrences = _getOcurrences(ransomNote);
  const magazineOcurrences = _getOcurrences(magazine);
  let response = Object.keys(ransomNoteOcurrences)
                 .reduce(_canConstruct(ransomNoteOcurrences, magazineOcurrences), true);
  return response;
};

const _canConstruct = (ransomNoteOcurrences, magazineOcurrences) => (acc, key) => {
  if (ransomNoteOcurrences[key] <= magazineOcurrences[key]) {
    return acc && true;
  }
  return false;
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

describe('Can construct', () => {
  it('should return false', () => {
    const ransomNote = 'a';
    const magazine = 'b';
    expect(canConstruct(ransomNote, magazine)).to.be.false;
  });

  it('should return false', () => {
    const ransomNote = 'aa';
    const magazine = 'ab';
    expect(canConstruct(ransomNote, magazine)).to.be.false;
  });

  it('should return true', () => {
    const ransomNote = 'aa';
    const magazine = 'aab';
    expect(canConstruct(ransomNote, magazine)).to.be.true;
  });
});

module.exports = canConstruct;
