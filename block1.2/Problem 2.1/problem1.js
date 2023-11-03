function lettersCount(str) {
  let result = str
    .toLowerCase()
    .split("")
    .reduce(function (acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  return result;
}

export { lettersCount };
