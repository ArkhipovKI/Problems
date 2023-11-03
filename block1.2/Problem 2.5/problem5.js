const areBracketsBalanced = (str) => {
  let arr = str.split("");
  if (str.trim() === "") return true;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count = count + 1;
    } else {
      count = count - 1;
    }
    if (count < 0) {
      break;
    }
  }
  if (count !== 0) {
    return false;
  }
  return true;
};

export { areBracketsBalanced };
