import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider, Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { chooseQuestion } from "../store/Exam/thunk";
import HeaderExam from "../components/HeaderExam";
import Footer from "../components/FooterExam";
import CircleArray from "../components/CircleArray";
import QuestionContent from "../components/QuestionContent";
import ExamRemainingTime from "../components/ExamRemainingTime";
import mathQuestions from "../utils/question";

const Exam1 = () => {
  const answers = useSelector((state) => state.examReducer.answers);
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );
  const indexSTT = useSelector((state) => state.examReducer.index);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  const [slider, setSlider] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [intervalTime, setIntervalTime] = useState(3600);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const dataQuestion = mathQuestions.find(({ id }) => id === currentQuestionId);
  // const dataQuestion = mathQuestions[indexSTT];
  const index = mathQuestions.findIndex((x) => x.id === dataQuestion?.id);
  useEffect(() => {
    const initialTime = setInterval(() => {
      setIntervalTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(initialTime);
  }, []);

  useEffect(() => {
    if (!questionSelected) {
      setCurrentQuestionId(1);
    }
    setCurrentQuestionId(questionSelected);
    return setCurrentQuestionId(questionSelected);
  }, [questionSelected]);

  // useEffect(() => {
  //   if (!indexSTT) {
  //     setCurrentQuestionId(1);
  //   }
  //   setCurrentQuestionId(indexSTT);
  //   return setCurrentQuestionId(indexSTT);
  // }, [indexSTT]);

  useEffect(() => {
    setSlider((answers.length / mathQuestions.length) * 100);
  }, [answers]);

  const calculatorResult = (answers, mathQuestions) => {
    let result = 0;
    for (let i = 0; i < answers?.length; i++) {
      const objCheck = mathQuestions.find(({ id }) => id === answers[i].id);
      if (objCheck?.correctAnswer === answers[i].options) {
        result++;
      }
    }
    return result;
  };

  return (
    <section className="bg-global h-full relative flex ">
      <div className="grow h-screen">
        <HeaderExam />
        <div className=" w-full bg-global">
          <div className="relative overflow-y-scroll max-h-[70vh] w-[95%] rounded-[8px] bg-white mx-auto my-6">
            {/* CONTENT EXAM AREA  */}
            <div className="h-[300px]">
              <QuestionContent index={index} data={dataQuestion} />
            </div>
            {/* CONTENT EXAM AREA  */}
          </div>
        </div>
        <Footer
          numberOfQuestion={mathQuestions.length}
          currentTime={intervalTime}
          className="absolute bottom-0 w-full"
        />
      </div>
      <div className="max-w-[480px] bg-white h-screen relative ">
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
          <ExamRemainingTime currentTime={intervalTime} className="py-3 px-6" />
          <CircleArray className="py-3 px-6" />
        </div>
        <div className="absolute bottom-10 w-full px-6 bg-white">
          <div className=" border-t border-b border-borderDisable py-3 ">
            <div className="flex items-center justify-between">
              <p className="m-0 w-1/2 text-start">Bạn đã hoàn thành</p>
              <div className="m-0 w-1/2 text-end">
                <div className="text-[24px] text-darkBlue font-semibold ">
                  <p className="m-0 inline-block">{answers.length} /</p>{" "}
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
                // defaultValue={0}
                value={slider}
                disabled={false}
              />
              <p className="m-0 w-[5%]">0%</p>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={() => showModal()}>click me </Button>
      <Modal
        open={open}
        // onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        className="relative max-w-[408px] top-1/2"
        footer={[]}
      >
        <CloseOutlined
          onClick={handleCancel}
          className="block absolute top-[-55px] right-1/2 translate-x-1/2 bg-white rounded-full text-center leading-5 font-bold w-[1.5rem] h-[1.5rem]"
        />

        <div className=" p-6">
          Bạn đã trả lời đúng:{calculatorResult(answers, mathQuestions)} câu{" "}
        </div>
      </Modal>
    </section>
  );
};

export default Exam1;
