import React, { useEffect, useState } from 'react';
// import { formatTime } from `../utils`;
const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const formatTime = (time) => {
    if (time < 60) {
      return time < 10 ? `0${time}s` : `${time}s`;
    } else {
      return Math.floor(time / 60) + 'm' + (time % 60) + 's';
    }
  };

  useEffect(() => {
    let correct = 0;
    results.forEach((results, index) => {
      if (results.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong> {formatTime(time)}
          </p>
          <button className="button is-info mr-2" onClick={onAnswersCheck}>
            Check your answers
          </button>
          <button className="button is-success" onClick={onReset}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
