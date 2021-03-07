import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className="Feedback_value">Good: {good}</p>
    <p className="Feedback_value">Neutral: {neutral}</p>
    <p className="Feedback_value">Bad: {bad}</p>
    <p className="Feedback_value">Total: {total}</p>
    <p className="Feedback_value">Positive feedback: {positivePercentage} %</p>
  </>
);

export default Statistics;
