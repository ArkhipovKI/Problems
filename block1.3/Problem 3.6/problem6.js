const inRange = (a, b) => {
  if (a > b) return () => false;

  return function (item) {
    const number = Number(item);
    return !isNaN(number) && number >= a && number <= b;
  };
};

const inArray = (arr) => {
  return (item) => arr.includes(item);
};

const notInArray = (arr) => {
  return (item) => !arr.includes(item);
};

export { inArray, inRange, notInArray };
