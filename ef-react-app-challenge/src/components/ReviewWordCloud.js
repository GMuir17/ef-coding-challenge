import React from 'react';
import WordCloud from 'react-d3-cloud';

const ReviewWordCloud = function (props) {
  if (!props.wordFrequency) return null;

  const data = props.wordFrequency.map((wordArray) => {
    return {text: wordArray[0], value: wordArray[1]}
  });
  console.log(data);

  const fontSizeMapper = word => word.value * 30;

  return <WordCloud
    data={data}
    fontSizeMapper={fontSizeMapper}
  />;
}

export default ReviewWordCloud;
