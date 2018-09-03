import React from 'react';
import WordCountTable from '../components/WordCountTable.js';
import reviewsData from '../reviews.json';

class WordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviewsData
    };
  }

  render() {
    return (
      <div className="word-container">
        <WordCountTable />
      </div>
    )
  }
}

export default WordContainer;
