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
  
})
