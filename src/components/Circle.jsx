import React, { useEffect, useState } from "react";
import { Button } from "antd";
import clsx from "clsx";
import { components } from "../styles";
import { useSelector } from "react-redux";

const Circle = ({ className, number, onClick }) => {
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );
  const answers = useSelector((state) => state.examReducer.answers);
  const [isSelected, setIsSelected] = useState(false);
  const [isConfuse, setIsConfuse] = useState(false);

  useEffect(() => {
    if (answers) {
      const answer = answers.find(({ id }) => id === number);
      if (answer && answer.isSelected) {
        setIsSelected(true);
      }
      if (answer && answer.isConfuse) {
        setIsConfuse(true);
      }
    }
    return;
  }, [answers]);

  let style = "";

  if (questionSelected && questionSelected === number) {
    style = components.btnAnsCurrent;
  } else if (isConfuse) {
    style = components.btnAnsYellow;
  } else if (isSelected) {
    style = components.btnAnsCurrent;
  } else {
    style = components.btnAnsDefault;
  }

  return (
    <Button
      onClick={onClick}
      className={clsx(
        className,
        style
      )}
    >
      {number ? number : "0"}
    </Button>
  );
};

export default Circle;
