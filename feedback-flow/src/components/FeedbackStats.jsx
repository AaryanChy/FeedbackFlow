import React from "react";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((prevVal, currntVal) => {
      return prevVal + currntVal.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ""); //replacing .0 with nothing using regular expression
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
