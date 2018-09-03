const assert = require('assert');
const WordFrequencyCalculator = require('../src/models/word_frequency_calculator.js');

describe('WordFrequencyCalculator', function () {
  let wordFrequencyCalculator;
  let testData = [
    "Testing the frequency of words words",
    "words words words",
    "testing capitalise and Capitalise"
  ];
  let testString = testData[0];

  beforeEach(() => {
    wordFrequencyCalculator = new WordFrequencyCalculator(testData);
  });

  it("should be able to return the length of the array", () => {
    const result = wordFrequencyCalculator.lengthOfArrayTest();
    assert.strictEqual(result, 3);
  });

  it("should be able to create an array of words matching a regular expression", () => {
    const result = wordFrequencyCalculator.getArrayOfMatchingWords(testString).length;
    assert.strictEqual(result, 6);
  });

  it("should be able to test the frequency of words in a string", () => {
    const result = wordFrequencyCalculator.calculateFrequencyFromString(testString);
    assert.deepStrictEqual(result, {
      Testing: 1,
      the: 1,
      frequency: 1,
      of: 1,
      words: 2
    });
  });

  it("should be able to test the frequency of words in an array of strings", () => {
    const result = wordFrequencyCalculator.calculateFrequency();
    assert.deepStrictEqual(result, {
      testing: 2,
      the: 1,
      frequency: 1,
      of: 1,
      words: 5,
      capitalise: 2,
      and: 1,
    });
  });


});
