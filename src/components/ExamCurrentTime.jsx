import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { chooseQuestion } from "../store/Exam/thunk";

import { Button } from "antd";
const ExamCurrentTime = ({ currentTime, numberOfQuestion }) => {
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );
  const dispatch = useDispatch();
  const handleNextQue = () => {
    if (questionSelected < numberOfQuestion) {
      dispatch(chooseQuestion(questionSelected + 1));
    } else {
      return;
    }
  };
  const handlePrevQue = () => {
    if (questionSelected > 1) {
      dispatch(chooseQuestion(questionSelected - 1));
    } else {
      return;
    }
  };

  const formatTime = (currentTime) => {
    currentTime = 3600 - currentTime;
    const minus = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    return `${String(minus).padStart(2, "0")} : ${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <section className="flex items-center justify-between w-[480px]">
      <div className="w-4/12 h-full flex items-center justify-between gap-2 ">
        <Button
          onClick={handlePrevQue}
          disabled={questionSelected && questionSelected > 1 ? false : true}
          className="w-4/12 h-12 border border-borderDisable bg-buttonDisable flex items-center justify-center rounded-[8px] hover:font-bold hover:border-borderDisable hover:text-[#808080] "
        >
          <LeftOutlined />
        </Button>
        <Button
          onClick={handleNextQue}
          className="w-8/12 h-12 border bg-darkBlue border-darkBlue flex items-center justify-between p-3 rounded-[8px] "
        >
          <p className="m-0 text-white">Câu tiếp</p>
          <RightOutlined className="text-white" />
        </Button>
      </div>
      <div className="w-8/12 h-full flex items-center justify-between p-3">
        <p className="m-0 w-9/12">Thời gian làm câu hiện tại</p>
        <p className="m-0 grow text-[24px] text-darkBlue font-semibold">
          {formatTime(currentTime)}
        </p>
      </div>
    </section>
  );
};

export default ExamCurrentTime;
