const isAnagram = (s, t) => {
  const a = Array.from(s).sort().toString();
  const b = Array.from(t).sort().toString();
  console.log(a, b);
  return a === b;
};

console.log(isAnagram('rat', 'tra'));
console.log(isAnagram('ana', 'naa'));

module.exports = isAnagram;
