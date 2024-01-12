import React from "react";
import { useDispatch } from "react-redux";
import { chooseQuestion, chooseIndex } from "../store/Exam/thunk.js";
import Circle from "./Circle";
import { Button, Tooltip } from "antd";
import { components } from "../styles.js";
import mathQuestions from "../utils/question.js";
import clsx from "clsx";
const CircleArray = ({ className }) => {
  const dispatch = useDispatch();
  const handleChooseQuestion = (id) => {
    dispatch(chooseQuestion(id));
    // dispatch(chooseIndex(id));
  };
  return (
    <section className={clsx("flex flex-col w-full", className)}>
      <div className="w-full flex items-center justify-start py-4 gap-2">
        <p className="m-0 ">Chỉ thị màu sắc: </p>
        <div className="flex items-center gap-4 justify-start">
          <Tooltip placement="top" title="Câu chưa trả lời">
            <Button className={components.btnAnsDefault}>0</Button>
          </Tooltip>
          <Tooltip placement="top" title="Câu đã trả lời">
            <Button className={components.btnAnsCurrent}>0</Button>
          </Tooltip>
          <Tooltip placement="top" title="Câu chưa chắc chắn">
            <Button className={components.btnAnsYellow}>0</Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full grid grid-cols-8 gap-6 py-4">
        {mathQuestions.map((item, i) => (
          <Circle
            // onClick={() => handleChooseQuestion(i)}
            onClick={() => handleChooseQuestion(item.id)}

            key={item.id}
            number={i + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default CircleArray;
