var titleToNumber = function(s) {
  let column = 0;
  const length = s.length - 1;
  for (let i = s.length - 1; i >= 0; i--) {
    let asciiValue = s.charCodeAt(length - i) - 64;
    column += Math.pow(26, i) * asciiValue;
  }

  return column;
};

console.log(titleToNumber('BA'));
