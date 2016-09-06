/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(NUMS) {
  let longest = 1;
  if (NUMS.length === 0) return 0;
  if (NUMS.length === 1) return 1;

  const _wiggleMaxLength = (nums, i) => {
    if (NUMS.length - 1 === i) return;
    const wiggle = _getWiggle(nums);
    if (longest < wiggle) longest = wiggle;
    return _wiggleMaxLength(nums.slice(1), i + 1);
  };

  const _getWiggle = nums => {
    const wiggle = [];
    const el = nums[0] - nums[1];
    let positive = true;
    if (el < 0) positive = false;
    if (el === 0) return 1;
    wiggle.push(el);
    for (let i = 1; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const difference = nums[i] - nums[j];
        if (positive && difference < 0) {
          positive = false;
          wiggle.push(difference);
        } else if (!positive && difference > 0) {
          positive = true;
          wiggle.push(difference);
        } else {
          i++;
          break;
        }
      }
    }

    return wiggle.length + 1;
  };

  _wiggleMaxLength(NUMS, 1);
  return longest;
};

describe('Wiggle Max Length', () => {
  it('should find the max length of a given array', () => {
    const array = [1, 7, 4, 9, 2, 5];
    expect(wiggleMaxLength(array)).to.be.equal(6);
  });

  it('should find the max length of a given array', () => {
    const array = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
    expect(wiggleMaxLength(array)).to.be.equal(7);
  });

  it('should find the max length of a given array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(wiggleMaxLength(array)).to.be.equal(2);
  });

  it('should find the max length of a given array', () => {
    const array = [0, 0, 0];
    expect(wiggleMaxLength(array)).to.be.equal(1);
  });

  it('should find the max length of a given array', () => {
    const array = [0, 0];
    expect(wiggleMaxLength(array)).to.be.equal(1);
  });

  it('should find the max length of a given array', () => {
    const array = [33,53,12,64,50,41,45,21,97,35,47,92,39,0,93,55,40,46,69,42,6,95,51,68,72,9,32,84,34,64,6,2,26,98,3,43,30,60,3,68,82,9,97,19,27,98,99,4,30,96,37,9,78,43,64,4,65,30,84,90,87,64,18,50,60,1,40,32,48,50,76,100,57,29,63,53,46,57,93,98,42,80,82,9,41,55,69,84,82,79,30,79,18,97,67,23,52,38,74,15];
    expect(wiggleMaxLength(array)).to.be.equal(67);
  });
});

module.exports = wiggleMaxLength;
