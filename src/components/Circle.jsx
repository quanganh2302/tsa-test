import React, { useEffect, useState } from "react";
import { Button } from "antd";
import clsx from "clsx";
import { components } from "../styles";
import { useSelector } from "react-redux";

const Circle = ({ className, index, onClick }) => {
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );
  const answers = useSelector((state) => state.examReducer.answers);
  const [isSelected, setIsSelected] = useState(false);
  const [isConfuse, setIsConfuse] = useState(false);
  let style = "";

  useEffect(() => {
    if (answers) {
      const answer = answers.find(({ indexAns }) => indexAns === index);
      if (answer?.isConfuse) {
        setIsConfuse(true);
        setIsSelected(false);
      } else if (answer?.isSelected) {
        setIsSelected(true);
      }
    }
    return () => {
      setIsSelected(false);
      setIsConfuse(false);
    };
  }, [answers, questionSelected]);

  if (questionSelected === index) {
    style = components.btnAnsCurrent;
  } else if (isConfuse) {
    style = components.btnAnsYellow;
  } else if (isSelected) {
    style = components.btnAnsBlue;
  } else {
    style = components.btnAnsDefault;
  }
  return (
    <Button onClick={onClick} className={clsx(className, style)}>
      {index ? index + 1 : "1"}
    </Button>
  );
};

export default Circle;
