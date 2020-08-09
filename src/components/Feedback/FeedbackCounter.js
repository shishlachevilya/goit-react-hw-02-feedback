import React from "react";
import Controls from "./Feedbacks";
import Values from "./Value";

class FeedbackCounter extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  hendleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  hendleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  hendleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = (sum) => {
    const values = Object.values.sum;
    let totalSum = 0;
    for (const value of values) {
      totalSum += value;
    }
    return totalSum;
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <Controls
          onIncrementGood={this.hendleIncrementGood}
          onIncrementNeutral={this.hendleIncrementNeutral}
          onIncrementBad={this.hendleIncrementBad}
        />

        <Values
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
        />
      </div>
    );
  }
}

export default FeedbackCounter;
