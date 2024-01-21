import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Button } from "antd";
import { chooseAnswer } from "../../store/Exam/thunk";
import clsx from "clsx";
import { components } from "../../styles";

const ContextSingle = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const allAnswers = useSelector((state) => state.examReducer.answers);
  const yourAnswer = [...allAnswers];
  const optionKeys = Object.keys(data.options);
  const optionValues = Object.values(data.options);
  const currentAns = yourAnswer?.find(
    ({ questionId }) => questionId === data.questionId
  );
  const [isSelected, setIsSelected] = useState(false);
  const [isConfuse, setIsConfuse] = useState(false);
  const [answer, setAnswer] = useState([]);

  const renderAnswer = () => {
    const arr = [];
    for (let i = 0; i < optionKeys.length; i++) {
      arr.push(
        <li key={i} className="flex gap-2 items-center py-2">
          <Button
            onClick={() => handleChooseAns(optionKeys[i])}
            className={clsx(
              isSelected && currentAns?.answer.indexOf(optionKeys[i]) !== -1
                ? components.btnAnsBlue
                : components.btnAnsDefault,
              "uppercase rounded-full"
            )}
          >
            {optionKeys[i]}
          </Button>
          <div>{optionValues[i]}</div>
        </li>
      );
    }
    return arr;
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
  useEffect(() => {
    if (allAnswers) {
      if (currentAns?.isSelected) {
        setIsSelected(true);
        setAnswer(currentAns?.answer);
      }
      if (currentAns?.isConfuse) {
        setIsConfuse(true);
      }
    }
    return () => {
      setIsSelected(false);
      setIsConfuse(false);
    };
  }, [allAnswers, data]);

  return (
    <section className={props.className}>
      <h2 className="text-[16px] font-semibold">
        This is a demo single answer question :
      </h2>
      <div>{data.question}</div>
      <ul>{renderAnswer()}</ul>
    </section>
  );
};

export default ContextSingle;
