function wrapInParagraph(text) {
  const arrayOfStrings = text.split("\n");
  const wrappedStrings = arrayOfStrings.map((value) => "<p>" + value + "</p>");
  const result = wrappedStrings.join("\n");

  return result;
}

module.exports = wrapInParagraph;
