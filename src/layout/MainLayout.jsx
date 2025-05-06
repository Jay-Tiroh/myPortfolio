import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col text-white">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
