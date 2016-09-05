/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const sMap = {};
  const tMap = {};
  let sChar, tChar;
  for (let i = 0; i < s.length; i++) {
    sChar = s.charAt(i);
    tChar = t.charAt(i);

    if(!sMap[sChar] && !tMap[tChar]) {
      sMap[sChar] = tChar;
      tMap[tChar] = sChar;
    } else if(sMap[sChar] !== tChar) {
      return false;
    }
  }

  return true;
};

describe('Isomorphic strings', () => {
  it('should return true for two isomorpic strings', () => {
    const a = 'egg';
    const b = 'add';
    expect(isIsomorphic(a, b)).to.be.true;
  });

  it('should return true for two isomorpic strings', () => {
    const a = 'aab';
    const b = 'aba';
    expect(isIsomorphic(a, b)).to.be.false;
  });

  it('should return false for two not isomorphic strings', () => {
    const a = 'foo';
    const b = 'bar';
    expect(isIsomorphic(a, b)).to.be.false;
  });
});

module.exports = isIsomorphic;
