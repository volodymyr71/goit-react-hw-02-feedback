import "./App.css";
import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increamentState = (e) => {
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
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.increamentState}
            />
          </Section>

          {this.countTotalFeedback() > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </div>
    );
  }
}
export default App;
