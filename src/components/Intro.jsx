import React from "react";
import Animate from "./Animate";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center  my-10 casual">
      <Animate type="typing">
        <h1 className="">A Bit About Me</h1>
      </Animate>

      <p className="mt-2 max-w-[45rem]">
        I’m a Computer Science student at the{" "}
        <span className="text-faded">
          Federal University of Technology Akure, Nigeria
        </span>
        , where I blend academic theory with real-world coding.
      </p>

      <p className="mt-5 max-w-[45rem] ">
        As a self-taught frontend developer, I’m driven by a passion for
        creating seamless, user-focused web experiences. From tackling Frontend
        Mentor challenges to building personal projects with React and Vite, I’m
        constantly learning and pushing my limits to craft interfaces that make
        an impact.
      </p>
    </div>
  );
};

export default Intro;
