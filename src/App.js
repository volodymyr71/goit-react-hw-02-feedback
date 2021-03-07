import "./App.css";
import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

class App extends React.Component {
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

  countTotalFeedback = () => {
    let total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percentageGood = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    if (this.countTotalFeedback() > 0) {
      return percentageGood;
    }
    return (percentageGood = "none");
  };

  render() {
    return (
      <div className="App">
        <div className="Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increamentState}
          />
          {/* <div className="Feedback_section">
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
          </div> */}

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>

          {/* <div className="Feedback_section">
            <p className="Feedback_text">Statistics</p>
            <p className="Feedback_value">Good: {this.state.good}</p>
            <p className="Feedback_value">Neutral: {this.state.neutral}</p>
            <p className="Feedback_value">Bad: {this.state.bad}</p>
            <p className="Feedback_value">Total: {this.countTotalFeedback()}</p>
            <p className="Feedback_value">
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}
export default App;
