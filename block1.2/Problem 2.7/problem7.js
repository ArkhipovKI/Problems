function replaceItemsClear(arr, item, replaceItem) {
  return arr.map((value, index, array) =>
    value === item ? replaceItem : value
  );
}

function replaceItemsMutate(arr, item, replaceItem) {
  arr.forEach((value, index, array) =>
    value === item ? (array[index] = replaceItem) : value
  );
  return arr;
}

export { replaceItemsClear, replaceItemsMutate };
