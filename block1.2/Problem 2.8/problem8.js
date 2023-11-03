const moveToStart = (arr, n) => {
  return [...arr.slice(-n), ...arr.slice(0, -n)];
};

export { moveToStart };
