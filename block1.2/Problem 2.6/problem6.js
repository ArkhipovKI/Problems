function findAllIdx(arr, value) {
  return arr
    .map((valueArr, index, array) => {
      if (value === valueArr) {
        return index;
      }
    })
    .filter((index) => index !== undefined);
}

export { findAllIdx };
