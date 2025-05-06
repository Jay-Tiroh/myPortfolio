import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import MyJourney from "../components/MyJourney";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
const HomePage = () => {
  return (
    <div className="p-10 flex flex-col justify-start items-center gap-20 space-y-10">
      <Hero />
      <Intro />
      <MyJourney />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default HomePage;
