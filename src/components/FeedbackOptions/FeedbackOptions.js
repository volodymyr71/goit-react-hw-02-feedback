import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Feedback_section">
    <p className="Feedback_text">Please leave feedback</p>
    <div className="Feedback_controls">
      <button className="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  </div>
);

export default FeedbackOptions;
