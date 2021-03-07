import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
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
);

export default FeedbackOptions;
