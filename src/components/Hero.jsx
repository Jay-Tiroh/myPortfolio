import React from "react";
import Stack from "./Stack";
const Hero = () => {
  return (
    <div className="casual">
      <div className="w-full flex md:flex-row flex-col justify-start items-center md:items-start py-10   ">
        <div className="hero-left md:relative md:w-[15rem] w-full">
          <div className="img gradient overflow-hidden flex justify-center items-center w-[15rem] h-[15rem] md:absolute md:-left-11 md:-top-5 m-auto md:m-0">
            <img
              src="/assets/images/avatar.png"
              alt=""
              className="w-[12rem] "
            />
          </div>
        </div>

        <div className="flex flex-col w-2/3 text-center md:text-start min-w-[20rem] md:relative md:m-0 mt-10">
          <p className="text-md  mb-5">
            Hello! I am <em>Jethro Uchechi</em>
          </p>
          <p className="text-sm text-faded mb-2 underline">
            A Frontend Developer who
          </p>
          <p className="text-3xl w-[20rem] leading-10 mb-2">
            Judges a <em>website</em> by it's <em>design</em> and <em>code</em>
            ...
          </p>
          <p className="text-xs text-faded mt-2 mb-2">
            Because if it doesn’t captivate and perform, why build it?
          </p>
          <img
            src="/assets/images/arrow.svg"
            alt=""
            className="size-17 absolute -left-18 -top-1 md:block hidden"
          />
        </div>
      </div>
      <div className="md:mt-10">
        <h1 className="text-lg text-center mb-5">My Stack</h1>
        <Stack stack={["html", "css", "js", "react", "tailwind"]} />
        <p className="text-center max-w-[40rem] mt-5">
          I craft responsive, stunning interfaces with HTML, CSS, JavaScript,
          and ReactJS, powered by Tailwind CSS and Vite, while mastering
          challenges on Frontend Mentor."
        </p>{" "}
        <div className="btn ">Explore My Work</div>
      </div>
    </div>
  );
};

export default Hero;
