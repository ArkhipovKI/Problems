function optionalChaining(obj, chain) {
  if (chain.length == 0) {
    return undefined;
  }
  for (let i = 0; i < chain.length; i++) {
    if (obj.hasOwnProperty(chain[i])) {
      obj = obj[chain[i]];
    } else {
      return undefined;
    }
  }
  return obj;
}

export { optionalChaining };
