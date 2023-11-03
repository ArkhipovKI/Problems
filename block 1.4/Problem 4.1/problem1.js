const getField = (data, field) => {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map((item) => item[field]);
};

export { getField };
