const intersection = (a, b) => {
  const mapA = a.reduce(_reduceArrayIntoObject, {});
  const mapB = b.reduce(_reduceArrayIntoObject, {});
  const result = Object.keys(mapA).reduce(_getIntersections(mapA, mapB), []);
};

const _reduceArrayIntoObject = (acc, el) => {
  if (acc[el]) acc[el] += 1;
  else acc[el] = 1;
  return acc;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([1, 2, 3], [1, 2]));
