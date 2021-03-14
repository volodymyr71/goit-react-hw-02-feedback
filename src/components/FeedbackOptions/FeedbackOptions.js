import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Feedback_controls">
    {Object.keys(options).map((option) => (
      <button
        className="button"
        name={option}
        key={uuidv4()}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
