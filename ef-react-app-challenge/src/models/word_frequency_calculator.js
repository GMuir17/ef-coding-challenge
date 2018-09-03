const WordFrequencyCalculator = function (arrayOfStrings) {
  this.arrayOfStrings = arrayOfStrings;
}

WordFrequencyCalculator.prototype.lengthOfArrayTest = function () {
  return this.arrayOfStrings.length;
};

module.exports = WordFrequencyCalculator;
