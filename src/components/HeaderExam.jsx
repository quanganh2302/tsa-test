import React from "react";
import clsx from "clsx";
const HeaderExam = ({ className }) => {
  return (
    <header
      className={clsx(
        "bg-white min-w-[64px] flex items-center justify-start",
        className
      )}
    >
      <img
        className="m-4 h-8"
        src={require("../assets/logo-short.svg").default}
        alt="logo-short"
      />
      <h2 className="m-0 font-bold text-[18px]">
        Thi thử ĐGTD - TSA 2024 - Khoa học và giải quyết vấn đề
      </h2>
    </header>
  );
};

export default HeaderExam;
