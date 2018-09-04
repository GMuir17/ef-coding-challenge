import React from 'react';

const WordCountTable = function(props) {
  if (!props.wordFrequency) return null;

  const wordRow = props.wordFrequency.map((wordFrequencyArray, index) => {
    const scaleNumber = wordFrequencyArray[1];
    const style = {fontSize: `${scaleNumber}em`}
    return (
      <tr key={index}>
        <td style={style}>{wordFrequencyArray[0]}</td>
        <td>{wordFrequencyArray[1]}</td>
      </tr>
    )
  })

  return (
    <div>
      <h4 onClick={props.displayWordCloud}>Show Word Cloud</h4>
      <table>
        <caption>Word Frequency Table</caption>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </tbody>
        <tbody>
          {wordRow}
        </tbody>
      </table>
    </div>
  )
}

export default WordCountTable;
