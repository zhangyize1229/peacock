export const includes = function (arr1, arr2) {
  return arr2.every((val) => arr1.includes(val));
};
