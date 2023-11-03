const getNumbersByParity = (data, parity) => {
  return data.filter((value) => {
    if (parity === "even") {
      return value % 2 === 0;
    }
    if (parity === "odd") {
      return value % 2 === 1;
    }
  });
};

export { getNumbersByParity };
