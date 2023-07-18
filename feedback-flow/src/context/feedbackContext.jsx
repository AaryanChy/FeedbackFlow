import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import feedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4();
    console.log(newfeedback);
    setFeedback([newfeedback, ...feedback]);
    console.log(feedback);
  };
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
