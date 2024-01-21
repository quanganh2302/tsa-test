import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseAnswer } from "../../store/Exam/thunk";
import { Input } from "antd";
const ContextCR = (props) => {
  const { data } = props;
  const allAnswers = useSelector((state) => state.examReducer.answers);
  const yourAnswer = [...allAnswers];

  const currentAns = yourAnswer?.find(
    ({ questionId }) => questionId === data.questionId
  );

  const questionContent = data.question.split(/\[\[(\d+)\]\]/).filter(Boolean);

  const number = data.question.match(/\d+/g).map(Number);

  const dispatch = useDispatch();

  const [answer, setAnswer] = useState(["-1", "-1"]);

  // useEffect(() => {
  //   const answerDefault = [...answer];
  //   if (!currentAns) {
  //     number.map((item, i) => answerDefault.splice(i, 1, "-1"));
  //     setAnswer(answerDefault);
  //   } else {
  //     number.map((item, i) =>
  //       currentAns.answer[i] === "-1" || currentAns.answer[i] !== ""
  //         ? answerDefault.splice(i, 1, "-1")
  //         : answerDefault.splice(i, 1, currentAns.answer[i])
  //     );
  //     setAnswer(answerDefault);
  //   }
  // }, [allAnswers]);

  useEffect(() => {
    const answerDefault = [...answer];
    if (!currentAns) {
      number.map((item, i) => answerDefault.splice(i, 1, "-1"));
      setAnswer(answerDefault);
    } else {
      number.map((item, i) =>
        currentAns.answer[i] === "-1" || currentAns.answer[i] === ""
          ? answerDefault.splice(i, 1, "-1")
          : answerDefault.splice(i, 1, currentAns.answer[i])
      );
      setAnswer(answerDefault);
    }
  }, [allAnswers]);

  const handleOnChange = (e) => {
    const newAns = [...answer];
    const { value, name } = e.target;
    number.map((item, i) => {
      if (name !== `answer${i + 1}`) {
        return;
      } else {
        newAns.splice(i, 1, value);
        setAnswer(newAns);
        handleChooseAns(newAns);
      }
    });
  };

  const handleChooseAns = (ans) => {
    const chooseAns = {
      questionId: data.questionId,
      answer: ans,
      isSelected: true,
      isConfuse: false,
    };
    const existingAnswerIndex = yourAnswer.findIndex(
      ({ questionId }) => questionId === data.questionId
    );
    if (existingAnswerIndex !== -1) {
      yourAnswer[existingAnswerIndex] = {
        ...yourAnswer[existingAnswerIndex],
        isSelected: true,
        answer: ans,
      };
    } else {
      yourAnswer.push(chooseAns);
    }
    dispatch(chooseAnswer([...yourAnswer]));
  };
  const renderQuestion = () => {
    // Use variable j to synchronize blankId in client with server
    let j = 0;
    return questionContent.map((item, i) => {
      if (!isNaN(item)) {
        j++;
        return (
          <Input
            onChange={handleOnChange}
            className="w-[200px]"
            key={i}
            name={`answer${j}`}
          />
        );
      } else {
        return item;
      }
    });
  };

  return (
    <section className={props.className}>
      <h2 className="text-[16px] font-semibold">
        This is a demo question for dragging:
      </h2>
      <div className=" flex items-center flex-wrap gap-2 p-4 align-middle">
        {renderQuestion()}
      </div>
    </section>
  );
};

export default ContextCR;
