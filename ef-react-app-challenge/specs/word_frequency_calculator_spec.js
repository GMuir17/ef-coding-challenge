const assert = require('assert');
const WordFrequencyCalculator = require('../src/models/word_frequency_calculator.js');

describe('WordFrequencyCalculator', function () {
  let wordFrequencyCalculator;
  const testData = [
    "Testing the frequency of words",
    "words words words",
    "testing capitalise and Capitalise"
  ]

  beforeEach(() => {
    wordFrequencyCalculator = new WordFrequencyCalculator(testData);
  })

  it("should be able to return the length of the array", () => {
    const result = wordFrequencyCalculator.lengthOfArrayTest();
    assert.strictEqual(result, 3);
  })
})
