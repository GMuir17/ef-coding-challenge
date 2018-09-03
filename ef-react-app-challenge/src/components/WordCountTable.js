import React from 'react';

  const WordCountTable = function(props) {
    return (
      <div>
        <h4>Testing</h4>
        <table>
            <caption>Word Frequency Table</caption>
          <tbody>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
            {/* <tr>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    )
  }

export default WordCountTable;
