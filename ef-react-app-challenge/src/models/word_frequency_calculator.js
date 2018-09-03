const WordFrequencyCalculator = function (arrayOfStrings) {
  this.arrayOfStrings = arrayOfStrings;
}

WordFrequencyCalculator.prototype.lengthOfArrayTest = function () {
  return this.arrayOfStrings.length;
};

// WordFrequencyCalculator.prototype.getWordFrequencyFromString = function (string) {
//
// };

WordFrequencyCalculator.prototype.getArrayOfMatchingWords = function (string) {
  const wordPattern = /\w+/g;
  return string.match(wordPattern);
};

module.exports = WordFrequencyCalculator;
