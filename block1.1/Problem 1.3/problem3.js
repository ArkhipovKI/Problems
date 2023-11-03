function compareWithPrecision(a, b, precision) {
  return Math.abs(a - b) <= precision;
}

module.exports = compareWithPrecision;
