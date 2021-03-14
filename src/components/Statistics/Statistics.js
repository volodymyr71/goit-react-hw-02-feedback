import React from "react";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
