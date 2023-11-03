function capitalize(str) {
  let a = str.toLowerCase().split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i][0].toUpperCase() + a[i].slice(1));
  }
  return b.join(" ");
}

module.exports = capitalize;
