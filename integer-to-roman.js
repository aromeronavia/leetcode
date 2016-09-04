/**
 * @param {number} num
 * @return {string}
 */

const thousands = {
  1: 'M',
  2: 'MM',
  3: 'MMM'
};

const cents = {
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const decimals = {
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
};

const units = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX'
};

const intToRoman = function(num) {
  let divisor = 1000;
  while (num > 0) {
    if (num % divisor > 1) {

    }
  }
};

intToRoman(1234);

module.exports = intToRoman;
