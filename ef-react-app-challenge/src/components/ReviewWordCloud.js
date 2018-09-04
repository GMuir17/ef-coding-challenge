import React from 'react';
import WordCloud from 'react-d3-cloud';

const ReviewWordCloud = function (props) {
  if (!props.wordFrequency) return null;

  const data = props.wordFrequency.map((wordArray) => {
    return {text: wordArray[0], value: wordArray[1]}
  });

  const fontSizeMapper = word => word.value * 25;

  return (
    <div>
      <h4 className="fake-link" onClick={props.displayTable}>Show Table</h4>
      <div className="word-cloud">
    <WordCloud
      data={data}
      fontSizeMapper={fontSizeMapper}
      font={"sans-serif"}
    />
  </div>
  </div>

  )
}

export default ReviewWordCloud;
