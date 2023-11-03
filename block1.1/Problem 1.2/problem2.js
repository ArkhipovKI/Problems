const defaultTo = (value, defaultValue) => {
  if (value === null || isNaN(value) || typeof value === undefined) {
    return defaultValue;
  }
  return value;
};

module.exports = defaultTo;
