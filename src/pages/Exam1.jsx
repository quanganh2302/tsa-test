import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Slider, Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { submitAnswer, timeTodo } from "../store/Exam/thunk";
import HeaderExam from "../components/HeaderExam";
import FooterExam from "../components/FooterExam";
import CircleArray from "../components/CircleArray";
import QuestionContent from "../components/QuestionContent";
import ExamRemainingTime from "../components/ExamRemainingTime";
import mathQuestions from "../utils/question";

const Exam1 = () => {
  const navigate = useNavigate();
  const answers = useSelector((state) => state.examReducer.answers);
  const questionSelected = useSelector(
    (state) => state.examReducer.questionSelected
  );

  const yourAns = answers.filter(({ isSelected }) => isSelected === true);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  const [slider, setSlider] = useState(0);
  const [intervalTime, setIntervalTime] = useState(3600);
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };
  const dataQuestion = mathQuestions[questionSelected];
  useEffect(() => {
    const initialTime = setInterval(() => {
      setIntervalTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(initialTime);
  }, []);

  useEffect(() => {
    setSlider((answers.length / mathQuestions.length) * 100);
  }, [answers]);

  const calculatorResult = (yourAns, mathQuestions) => {
    let result = 0;
    for (let i = 0; i < yourAns?.length; i++) {
      const objCheck = mathQuestions.find(({ id }) => id === yourAns[i].id);
      if (objCheck?.correctAnswer === yourAns[i]?.options) {
        result++;
      }
    }
    return result;
  };

  if (intervalTime <= 0) {
    navigate("/ket-qua");
  }
  // console.log("yourAns", yourAns);  
  const handleSubmit = () => {
    console.log(yourAns)
    navigate("/ket-qua");
    const result = calculatorResult(yourAns, mathQuestions);
    dispatch(timeTodo(3600 - intervalTime));
    dispatch(submitAnswer(result));
  };

  return (
    <section className="bg-global h-full relative flex ">
      <div className="grow h-screen">
        <HeaderExam />
        <div className=" w-full bg-global">
          <div className="relative overflow-y-scroll max-h-[70vh] w-[95%] rounded-[8px] bg-white mx-auto my-6">
            {/* CONTENT EXAM AREA  */}
            <div className="h-[300px]">
              <QuestionContent index={questionSelected} data={dataQuestion} />
            </div>
            {/* CONTENT EXAM AREA  */}
          </div>
        </div>
        <FooterExam
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
          <ExamRemainingTime
            onclick={() => setOpen(true)}
            currentTime={intervalTime}
            className="py-3 px-6"
            text="Nộp bài"
          />
          <CircleArray className="py-3 px-6" />
        </div>
        <div className="absolute bottom-10 w-full px-6 bg-white">
          <div className=" border-t border-b border-borderDisable py-3 ">
            <div className="flex items-center justify-between">
              <p className="m-0 w-1/2 text-start">Bạn đã hoàn thành</p>
              <div className="m-0 w-1/2 text-end">
                <div className="text-[24px] text-darkBlue font-semibold ">
                  <p className="m-0 inline-block">{yourAns.length} /</p>{" "}
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
                {Math.floor((yourAns.length / mathQuestions.length) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} closeIcon={false} className="relative" footer={[]}>
        <CloseOutlined
          onClick={handleCancel}
          className="block absolute top-[-55px] right-1/2 translate-x-1/2 bg-white rounded-full text-center leading-5 font-bold w-[1.5rem] h-[1.5rem]"
        />

        <div className=" p-6 ">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] bg-red-500 rounded-full flex items-center justify-center">
              <p className="m-0 text-white font-semibold text-[20px] text-center">
                {yourAns.length} / {mathQuestions.length}
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
                onClick={handleCancel}
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
    </section>
  );
};

export default Exam1;
