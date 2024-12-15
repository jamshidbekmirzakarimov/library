import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const renderHeaderText = () => {
    switch (location.pathname) {
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/books":
        return "Books";
      case "/admin/students":
        return "Students";
      case "/admin/group":
        return "Group";
        case "/admin/settings":
          return "Settings";
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-[#F8F8F8]">
        <div className="flex">
          <div className="w-[300px] h-screen">
            <Sidebar />
          </div>
          <div className="w-full h-screen ">
            <div className="h-[8vh]">
            <Header title={renderHeaderText()} />
            </div>
          <div className="h-[92vh]">
          <Outlet/>
          </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-screen bg-white">
        <div className="h-[8vh]">
          <Header />
        </div>
        <div className="h-[92vh] w-full flex">
          <div className="w-[25%] h-full">
            <Sidebar />
          </div>
          <div className="w-[75%] h-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
