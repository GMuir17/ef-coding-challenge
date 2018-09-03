const WordFrequencyCalculator = function (arrayOfStrings) {
  this.arrayOfStrings = arrayOfStrings;
}

WordFrequencyCalculator.prototype.lengthOfArrayTest = function () {
  return this.arrayOfStrings.length;
};

WordFrequencyCalculator.prototype.getArrayOfMatchingWords = function (string) {
  const wordPattern = /\w+/g;
  return string.match(wordPattern);
};

WordFrequencyCalculator.prototype.calculateFrequencyFromString = function (string) {
  const words = this.getArrayOfMatchingWords(string);
  return words.reduce(function (count, word) {
    if (count.hasOwnProperty(word)) {
      count[word] = count[word] + 1;
    }
    else {
      count[word] = 1;
    }
    return count;
  }, {});
};

module.exports = WordFrequencyCalculator;
