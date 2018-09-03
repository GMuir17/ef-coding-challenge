import React from 'react';
import WordCountTable from '../components/WordCountTable.js';
import reviewsData from '../reviews.json';

const WordFrequencyCalculator = require('../models/word_frequency_calculator.js');

class WordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviewsData,
      wordFrequencyObject: null
    };
    this.calculateWordFrequency = this.calculateWordFrequency.bind(this);
  }

  componentDidMount() {
    this.calculateWordFrequency()
  }

  calculateWordFrequency() {
    const wordFrequencyCalculator = new WordFrequencyCalculator(this.state.reviews);
    const freqObjt = wordFrequencyCalculator.calculateFrequency();
    this.setState({
      wordFrequencyObject: freqObjt
    })
  }

  render() {
    console.log("HEY", this.state.wordFrequencyObject);
    return (
      <div className="word-container">
        <WordCountTable />
      </div>
    )
  }
}

export default WordContainer;
