const binarySearch = function(array, element) {
  let start = 0;
  let middle;
  let end = array.length - 1;
  while (start <= end) {
    middle = Math.floor(start + (end - start) / 2);
    if (array[middle] === element) {
      return array[middle];
    } else if (array[middle] < element) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

describe('Binary Search', () => {
  const NOT_FOUND = -1;
  it('should find the right element', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 5;
    const result = binarySearch(array, target);
    expect(result).to.be.equal(target);
  });

  it('should return -1 because target was not found', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(array, target);
    expect(result).to.be.equal(NOT_FOUND);
  });
});
module.exports = binarySearch;
