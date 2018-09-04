import React from 'react';
import WordCountTable from '../components/WordCountTable.js';
import WordCloud from '../components/WordCloud.js';
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
    const freqObjt = Object.entries(wordFrequencyCalculator.calculateFrequency());
    this.setState({
      wordFrequencyObject: freqObjt
    })
  }

  render() {
    return (
      <div className="word-container">
        <WordCountTable wordFrequency={this.state.wordFrequencyObject}/>
        <WordCloud wordFrequency={this.state.wordFrequencyObject}/>
      </div>
    )
  }
}

export default WordContainer;
