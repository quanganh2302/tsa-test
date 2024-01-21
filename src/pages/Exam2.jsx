import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Slider, Modal, Button, Drawer } from "antd";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import { submitAnswer, timeTodo } from "../store/Exam/thunk";
import HeaderExam from "../components/HeaderExam";
import CircleArray from "../components/CircleArray";
import QuestionContent from "../components/QuestionContent";
import mathQuestions from "../utils/question";
import ExamCurrentTime from "../components/ExamCurrentTime";
import ExamRemainingTime from "../components/ExamRemainingTime";

import demoQuestions from "../utils/demoData";
import ContextDragging from "../components/drag-drop-question/ContextDragging";
import ContextCR from "../components/constructed-response-question/ContextCR";
import ContextSingle from "../components/single-answer-question/ContextSingle";
import ContextTrueFalse from "../components/true-false-question/ContextTrueFalse";
import ContextMultiple from "../components/multiple-answers-question/ContextMultiple";
const Exam2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Data area -------------------------------------------------------------------------

  const answers = useSelector((state) => state.examReducer.answers);
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );

  const dataQuestion = mathQuestions[questionSelected];
  // const yourAns = answers.filter(({ isSelected }) => isSelected === true);
  // console.log(yourAns);

  const demoData = demoQuestions[0].questions;
  // console.log(demoData);
  // Data area -------------------------------------------------------------------------

  // Modal feature area -------------------------------------------------------------------------

  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };
  // Modal feature area -------------------------------------------------------------------------

  // Slider feature area -------------------------------------------------------------------------

  const [slider, setSlider] = useState(0);
  // useEffect(() => {
  //   setSlider((answers.length / mathQuestions.length) * 100);
  // }, [answers]);
  // const calculatorResult = (yourAns, mathQuestions) => {
  //   let result = 0;
  //   for (let i = 0; i < yourAns?.length; i++) {
  //     const objCheck = mathQuestions.find(({ id }) => id === yourAns[i].id);
  //     if (objCheck?.correctAnswer === yourAns[i]?.options) {
  //       result++;
  //     }
  //   }
  //   return result;
  // };

  // Slider feature area -------------------------------------------------------------------------

  // Time feature area -------------------------------------------------------------------------

  const [intervalTime, setIntervalTime] = useState(1800);
  useEffect(() => {
    const initialTime = setInterval(() => {
      setIntervalTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(initialTime);
  }, []);

  if (intervalTime <= 0) {
    navigate("/ket-qua");
  }
  const handleSubmit = () => {
    navigate("/ket-qua");
    // const result = calculatorResult(yourAns, mathQuestions);
    dispatch(timeTodo(3600 - intervalTime));
    // dispatch(submitAnswer(result));
  };

  const formatTime = (currentTime) => {
    if (currentTime <= 0) {
      return "00:00";
    }
    const minus = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    return `${String(minus).padStart(2, "0")} : ${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  // Time feature area -------------------------------------------------------------------------

  return (
    <section className="bg-global h-screen relative ">
      <HeaderExam />
      <div className=" w-full bg-global flex">
        <div className="w-1/2 relative overflow-y-auto max-h-[70vh] rounded-[8px] bg-white mx-auto my-6">
          {/* CONTENT EXAM AREA  */}
          <div className="h-full flex flex-col w/full">
            <h3>This is result</h3>
            <div>{JSON.stringify(answers)}</div>

            {/* <QuestionContent index={questionSelected} data={dataQuestion} /> */}
          </div>
          {/* CONTENT EXAM AREA  */}
        </div>
        {/* ANSWER AREA -----------------------------------------------------------------------  */}
        <div className="w-1/2 bg-white rounded-[8px] max-h-[70vh] my-6 p-4 overflow-y-auto">
          {demoData.map((item) => {
            // console.log(item);
            if (item.type === "Dragging") {
              return (
                <ContextDragging
                  className={" p-3 rounded border border-borderDisable"}
                  data={item}
                  key={item.questionId}
                />
              );
            } else if (item.type === "SingleAnswer") {
              return (
                <ContextSingle
                  className={" p-3 rounded border border-borderDisable"}
                  data={item}
                  key={item.questionId}
                />
              );
            } else if (item.type === "MultipleAnswers") {
              return (
                <ContextMultiple
                  className={" p-3 rounded border border-borderDisable"}
                  data={item}
                  key={item.questionId}
                />
              );
            } else if (item.type === "True/False") {
              return (
                <ContextTrueFalse
                  className={" p-3 rounded border border-borderDisable"}
                  data={item}
                  key={item.questionId}
                />
              );
            } else if (item.type === "ConstructedResponse") {
              return (
                <ContextCR
                  className={" p-3 rounded border border-borderDisable"}
                  data={item}
                  key={item.questionId}
                />
              );
            }
          })}
        </div>
        {/* ANSWER AREA -----------------------------------------------------------------------  */}
      </div>

      <footer className="absolute bottom-0 w-full px-12 min-h-[80px] bg-white flex items-center justify-between">
        <ExamCurrentTime totalTime={1800} currentTime={intervalTime} />
        <div className="flex items-center justify-between w-[400px] gap-2">
          <div className="h-12 w-8/12 flex items-center justify-between py-1 px-1 border border-borderDisable rounded-[8px]">
            <p className="m-0 w-7/12">Thời gian còn lại: </p>
            <p className="m-0 grow text-[24px] text-darkBlue font-semibold">
              {formatTime(intervalTime)}
            </p>
          </div>
          <Button
            onClick={showDrawer}
            type="submit"
            className="grow h-12 border bg-primary border-primary flex items-center justify-center rounded-[8px] text-white"
          >
            <LeftOutlined /> Mở menu/Nộp bài
          </Button>
        </div>
      </footer>

      <Modal
        open={openModal}
        closeIcon={false}
        className="relative"
        footer={[]}
      >
        <CloseOutlined
          onClick={handleCancelModal}
          className="block absolute top-[-55px] right-1/2 translate-x-1/2 bg-white rounded-full text-center leading-5 font-bold w-[1.5rem] h-[1.5rem]"
        />

        <div className=" p-6 ">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] bg-red-500 rounded-full flex items-center justify-center">
              <p className="m-0 text-white font-semibold text-[20px] text-center">
                {/* {yourAns.length} / {mathQuestions.length} */}
                <br />
                Câu
              </p>
            </div>
            <p className="m-0 text-[#262626]">
              Bạn vẫn còn thời gian làm bài, bạn có chắc muốn kết thúc bài thi?
            </p>
          </div>
          <div className="flex justify-between gap-3 mt-6">
            <div className="w-1/2">
              <Button
                onClick={handleCancelModal}
                className="w-full min-h-[36px] bg-darkBlue border-darkBlue text-white rounded-[8px]"
              >
                Làm bài tiếp
              </Button>
            </div>
            <div className="w-1/2">
              <Button
                onClick={handleSubmit}
                className="w-full min-h-[36px] border bg-primary border-primary  rounded-[8px] text-white"
              >
                Nộp bài thi
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Drawer
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        open={openDrawer}
        key="right"
        className=""
      >
        <div className=" bg-white h-full relative ">
          <div className="">
            <div className="py-3 px-6">
              <h2 className="mt-3 text-[18px] font-semibold">
                Thông tin thí sinh
              </h2>
              <div className="flex justify-between items-center">
                <p>Họ tên</p>
                <p>123456789</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Mã dự thi</p>
                <p>123456789</p>
              </div>
            </div>
            <ExamRemainingTime
              currentTime={intervalTime}
              text={"Nộp bài"}
              className={"w-full px-3"}
            />
            <CircleArray className="py-3 px-6" />
          </div>
          <div className="absolute bottom-10 w-full px-6 bg-white">
            <div className=" border-t border-b border-borderDisable py-3 ">
              <div className="flex items-center justify-between">
                <p className="m-0 w-1/2 text-start">Bạn đã hoàn thành</p>
                <div className="m-0 w-1/2 text-end">
                  <div className="text-[24px] text-darkBlue font-semibold ">
                    <p className="m-0 inline-block">
                      {/* {yourAns.length} / */}
                    </p>
                    <p className="m-0 inline-block">
                      {mathQuestions.length}{" "}
                      <span className="text-[14px] text-[#262626] font-normal">
                        câu
                      </span>{" "}
                    </p>
                  </div>{" "}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Slider
                  className="w-[95%]"
                  tooltip={{ title: "" }}
                  value={slider}
                  disabled={false}
                />
                <p className="m-0 w-[5%]">
                  {/* {Math.floor((yourAns.length / mathQuestions.length) * 100)}% */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default Exam2;
