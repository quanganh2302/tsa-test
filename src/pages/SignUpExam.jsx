import React from "react";
import ExamItem from "../components/ExamItem";
import exam from "../utils/exam.js";

const SignUpExam = () => {
  return (
    <section className="">
      <div className="flex flex-row items-center">
        <h1 className= "m-0 text-start text-[20px] font-normal">
          Bài thi Đánh giá tư duy - TSA
        </h1>
      </div>
      <hr className="line my-4" />
      <div className="">
        <div className="grid md:grid-cols-2 gird-cols-1 gap-4">
          {exam.map((item) => (
            <ExamItem className="" key={item.nameExam} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignUpExam;
