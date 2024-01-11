import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { chooseAnswer } from "../store/Exam/thunk";
import { Button, Tooltip } from "antd";
import { components } from "../styles";
import { FlagOutlined } from "@ant-design/icons";

const QuestionContent = ({ data }) => {
  const dispatch = useDispatch();
  const optionKeys = Object.keys(data.options);
  const optionValues = Object.values(data.options);

  const answers = useSelector((state) => state.examReducer.answers);

  const [isSelected, setIsSelected] = useState(false);
  const [isConfuse, setIsConfuse] = useState(false);
  const [currentAns, setCurrentAns] = useState("");
  const yourAns = [...answers];
  const handleChooseAns = (ans) => {
    const answer = {
      id: data.id,
      options: ans,
      isSelected: true,
      isConfuse: false,
    };
    if (yourAns.some(({ id }) => id === data.id)) {
      const index = yourAns.findIndex(({ id }) => id === data.id);
      yourAns.splice(index, 1, answer);
    } else {
      yourAns.push(answer);
    }
    dispatch(chooseAnswer(yourAns));
  };
  // const handleConfuse = (ans) => {
  //   const answer = {
  //     id: data.id,
  //     options: ans,
  //     isSelected: true,
  //     isConfuse: true,
  //   };
  //   if (yourAns.some(({ id }) => id === data.id)) {
  //     const index = yourAns.findIndex(({ id }) => id === data.id);
  //     // yourAns.isConfuse = false;
  //     if ((yourAns.isConfuse = false)) {
  //       yourAns.isConfuse = true;
  //     } else {
  //       yourAns.isConfuse = true;
  //     }
  //   } else {
  //     yourAns.isConfuse = true;
  //   }
  //   dispatch(chooseAnswer(yourAns));
  // };
  useEffect(() => {
    if (answers) {
      const answer = yourAns.find(({ id }) => id === data.id);
      if (answer?.isSelected) {
        setIsSelected(true);
        setCurrentAns(answer?.options);
      }
      if (answer?.isConfuse) {
        setIsConfuse(true);
      }
    }
    return () => {
      setIsConfuse(false);
    };
  }, [answers]);

  // RENDER DATA ANSWER AFTER CHANGE QUESTION
  useEffect(() => {
    if (answers) {
      const answer = yourAns.find(({ id }) => id === data.id);
      if (answer?.isSelected) {
        setIsSelected(true);
        setCurrentAns(answer?.options);
      }
    }
    return () => {
      setIsSelected(false);
    };
  }, [answers,data]);

  let answerArea = () => {
    const arr = [];
    for (let i = 0; i < optionKeys.length; i++) {
      arr.push(
        <li key={i} className="flex gap-2 items-center py-2">
          <Button
            onClick={() => handleChooseAns(optionKeys[i])}
            className={clsx(
              isSelected && optionKeys[i] === currentAns
                ? components.btnAnsCurrent
                : components.btnAnsDefault,
              "uppercase"
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

  return (
    <section className="flex items-start justify-between pt-3 px-6 gap-4">
      <Button className={clsx(components.btnAnsCurrent)}>{data.id}</Button>
      <div className="text-start grow">
        <div>{data.question}</div>
        <ul>{answerArea()}</ul>
      </div>
      <div className="">
        <Tooltip placement="top" title="Đánh dấu câu trả lời chưa chắc chắn">
          <Button
            className={clsx(
              isConfuse ? components.btnAnsYellow : components.btnAnsDefault
            )}
          >
            <FlagOutlined />
          </Button>
        </Tooltip>
      </div>
    </section>
  );
};

export default QuestionContent;
