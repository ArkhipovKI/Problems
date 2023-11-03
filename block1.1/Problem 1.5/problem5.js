const reverseLongWords = (str) => {
  let a = str.split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    a[i].length < 5 ? b.push(a[i]) : b.push(a[i].split("").reverse().join(""));
  }
  return b.join(" ");
};

module.exports = reverseLongWords;
