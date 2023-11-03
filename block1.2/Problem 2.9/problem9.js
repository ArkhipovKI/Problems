const hasArrays = (arr) => {
  return arr.some((value, index, array) => Array.isArray(value));
};

export { hasArrays };
