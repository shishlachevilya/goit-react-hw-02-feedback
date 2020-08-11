import React from "react";

const FeedbackOptions = (props) => {
  const {options, onLeaveFeedback} = props;

  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        )
      })}
    </div>
  );
};

export default FeedbackOptions;
