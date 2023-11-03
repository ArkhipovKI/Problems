function partition(array, callback) {
  let trueArray = [];
  let falseArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof callback === "undefined") {
      if (!!array[i]) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    } else {
      if (callback(array[i])) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
  }
  return [trueArray, falseArray];
}

export { partition };
