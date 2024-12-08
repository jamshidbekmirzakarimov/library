import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="h-[8vh]">
          <Header />
        </div>
        <div className="h-[92vh] w-full flex">
          <div className="w-[25%] р-full">
            <Sidebar />
          </div>
          <div className="w-[75%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
