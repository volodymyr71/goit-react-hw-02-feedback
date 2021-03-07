import React from "react";
// import "./feedback.css";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increamentState = (e) => {
    console.log(e.target.name);
    if (e.target.name === "good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }
    if (e.target.name === "neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (e.target.name === "bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback_section">
          <p className="Feedback_text">Please leave feedback</p>
          <div className="Feedback_controls">
            <button
              className="button"
              name="good"
              onClick={this.increamentState}
            >
              Good
            </button>
            <button
              className="button"
              name="neutral"
              onClick={this.increamentState}
            >
              Neutral
            </button>
            <button
              className="button"
              name="bad"
              onClick={this.increamentState}
            >
              Bad
            </button>
          </div>
        </div>

        <div className="Feedback_section">
          <p className="Feedback_text">Statistics</p>
          <p className="Feedback_value">Good: {this.state.good}</p>
          <p className="Feedback_value">Neutral: {this.state.neutral}</p>
          <p className="Feedback_value">Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
