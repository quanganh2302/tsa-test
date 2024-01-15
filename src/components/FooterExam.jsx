import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseQuestion } from "../store/Exam/thunk";
import clsx from "clsx";
import ExamCurrentTime from "./ExamCurrentTime";
const FooterExam = ({ className, currentTime, numberOfQuestion }) => {
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );
  const dispatch = useDispatch();
  const [nextQuestion, setNextQuestion] = useState(questionSelected);
  const handleNextQue = () => {
    if (questionSelected < numberOfQuestion - 1) {
      setNextQuestion(questionSelected + 1);
      dispatch(chooseQuestion(nextQuestion));
    } else {
      return;
    }
  };
  const handlePrevQue = () => {
    if (questionSelected > 1) {
      setNextQuestion(questionSelected - 1);
      dispatch(chooseQuestion(nextQuestion));
    } else {
      return;
    }
  };
  return (
    <footer
      className={clsx(
        "px-12 min-h-[80px] bg-white flex items-center ",
        className
      )}
    >
      <ExamCurrentTime
        handlePrevQue={handlePrevQue}
        handleNextQue={handleNextQue}
        numberOfQuestion={numberOfQuestion}
        currentTime={currentTime}
      />
    </footer>
  );
};

export default FooterExam;
