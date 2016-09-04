Array.prototype.flatten = function() {
  var ret = [];
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      ret = ret.concat(this[i].flatten());
    } else {
      ret.push(this[i]);
    }
  }
  return ret;
};

const spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) return matrix;
  return _spiralOrder(matrix);
};

const _spiralOrder = matrix => {
  if (!matrix[1]) return matrix[0];
  const array = matrix.flatten();
  let factor = Math.sqrt(array.length);
  let times = factor;
  let way = 1;
  let index = -1;
  const result = [];

  while (times > 0) {
    for (let j = 0; j < times; j++) {
      index += 1 * way;
      result.push(array[index]);
    }

    times -= 1;
    for (let j = 0; j < times; j++) {
      index += factor * way;
      result.push(array[index]);
    }

    way *= -1;
  }

  return result;
};

console.log(spiralOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]));
module.exports = spiralOrder;
