function reference() {
  return a;
}

function type() {
  let a = false;
  return (b = a(32));
}

module.exports = {
  reference,
  type,
};
