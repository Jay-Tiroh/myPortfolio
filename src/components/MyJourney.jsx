import React, { useEffect, useRef } from "react";
import Animate from "./Animate";

const MyJourney = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
          observer.unobserve(element); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-center  semiformal  w-full">
      <div className=" h-full  m-auto md:max-w-[45rem]">
        <h1 className=" mb-10 casual"> My Journey</h1>
        <Animate type="pop-y">
          <div className="grid md:grid-cols-2 place-items-center gap-3  m-auto">
            <div className="card w-full  flex flex-col justify-center p-5 m-auto  rounded-md shadow-lg text-sm">
              <h2 className="text-md"> Frontend Mentor Challenges</h2>
              <h3 className="text-sm text-accent">
                Building Real-World Skills
              </h3>
              <p className="text-xs font-normal text-faded mt-3">
                I’ve completed several Frontend Mentor challenges to sharpen my
                skills in HTML, CSS, JavaScript, and ReactJS, focusing on
                responsive design and clean code.
              </p>
              <div className=" journey-btn">View Projects</div>
            </div>
            {/* card */}
            <div className="card w-full  flex flex-col justify-center p-5 m-auto  rounded-md shadow-lg text-sm">
              <h2 className="text-md"> Personal Projects</h2>
              <h3 className="text-sm text-accent">Learning by Doing</h3>
              <p className="text-xs font-normal text-faded mt-3">
                I’ve built responsive web apps using ReactJS, Tailwind CSS, and
                Vite, experimenting with modern tools to create user-focused
                interfaces.
              </p>
              <div className=" journey-btn">View Projects</div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default MyJourney;
