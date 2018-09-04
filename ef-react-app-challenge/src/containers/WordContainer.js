import React from 'react';
import WordCountTable from '../components/WordCountTable.js';
import ReviewWordCloud from '../components/ReviewWordCloud.js';
import reviewsData from '../reviews.json';

const WordFrequencyCalculator = require('../models/word_frequency_calculator.js');

class WordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviewsData,
      wordFrequencyObject: null,
      tableView: true,
      cloudView: false
    };
    this.calculateWordFrequency = this.calculateWordFrequency.bind(this);
    this.displayWordCloud = this.displayWordCloud.bind(this);
    this.displayTable = this.displayTable.bind(this);
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

  displayWordCloud() {
    this.setState({
      tableView: false,
      cloudView: true
    })
  }

  displayTable() {
    this.setState({
      tableView: true,
      cloudView: false
    })
  }

  render() {
    let cloudViewDisplay = null;
    let tableViewDisplay = null;

    if (this.state.cloudView) {
      cloudViewDisplay =
      <ReviewWordCloud
        wordFrequency={this.state.wordFrequencyObject}
        displayTable={this.displayTable}
      />
    }

    if (this.state.tableView) {
      tableViewDisplay =
      <WordCountTable
        wordFrequency={this.state.wordFrequencyObject}
        displayWordCloud={this.displayWordCloud}
      />
    }

    return (
      <div className="word-container">
        {tableViewDisplay}
        {cloudViewDisplay}
      </div>
    )
  }
}

export default WordContainer;
