import React, {Component} from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    this.countTotal = 0;

    this.feedbackButtonClickHandler = this.feedbackButtonClickHandler.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
  }

  feedbackButtonClickHandler(option) {
    this.countTotal++;

    this.setState((state) => {
      return {
        [option]: state[option] + 1
      }
    });
  }

  countTotalFeedback(values) {
    this.countTotal = values.reduce((acc, value) => acc + value, 0);

    return this.countTotal;
  }

  countPositiveFeedbackPercentage() {
    const positiveValue = this.state.good;

    return Math.round(positiveValue * 100 / this.countTotal) || 0;
  }

  render() {
    const {good, neutral, bad} = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackButtonClickHandler}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotal === 0 ? (
            <Notification message="No feedback given"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(Object.values(this.state))}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
