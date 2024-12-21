import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="relative bg-[#fff] h-full">
      <h1 className="p-[20px] text-[20px] text-[#1D1D41]">Education</h1>
      <ul className="">
        <li>
          <Link
            to="dashboard"
            className={`ps-[20px] py-[10px] group hover:bg-[#1D1D41] duration-300 flex items-center ${
              location.pathname === "/admin/dashboard" ? "bg-[#1D1D41]" : ""
            }`}
          >
            <div className="me-[10px]">
              <svg
                className={`fill-[#1D1D41] group-hover:fill-[#fff] duration-300 ${
                  location.pathname === "/admin/dashboard" ? "fill-[#fff]" : ""
                }`}
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </div>
            <h3
              className={`text-[#1D1D41] group-hover:text-white duration-300 ${
                location.pathname === "/admin/dashboard" ? "text-white" : ""
              }`}
            >
              Dashboard
            </h3>
          </Link>
        </li>

        <li>
          <Link
            to="books"
            className={`ps-[20px] py-[10px] group hover:bg-[#1D1D41] duration-300 flex items-center ${
              location.pathname === "/admin/books" ? "bg-[#1D1D41]" : ""
            }`}
          >
            <div className="me-[10px]">
              <svg
                className={`fill-[#1D1D41] group-hover:fill-[#fff] duration-300 ${
                  location.pathname === "/admin/books" ? "fill-[#fff]" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 448 512"
              >
                <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
            </div>
            <h3
              className={`text-[#1D1D41] group-hover:text-white duration-300 ${
                location.pathname === "/admin/books" ? "text-white" : ""
              }`}
            >
              Books
            </h3>
          </Link>
        </li>

        <li>
          <Link
            to="students"
            className={`ps-[20px] py-[10px] group hover:bg-[#1D1D41] duration-300 flex items-center ${
              location.pathname === "/admin/students" ? "bg-[#1D1D41]" : ""
            }`}
          >
            <div className="me-[10px]">
              <svg
                className={`fill-[#1D1D41] group-hover:fill-[#fff] duration-300 ${
                  location.pathname === "/admin/students" ? "fill-[#fff]" : ""
                }`}
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
              </svg>
            </div>
            <h3
              className={`text-[#1D1D41] group-hover:text-white duration-300 ${
                location.pathname === "/admin/students" ? "text-white" : ""
              }`}
            >
              Students
            </h3>
          </Link>
        </li>

        <li>
          <Link
            to="group"
            className={`ps-[20px] py-[10px] group hover:bg-[#1D1D41] duration-300 flex items-center ${
              location.pathname === "/admin/group" ? "bg-[#1D1D41]" : ""
            }`}
          >
            <div className="me-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#1D1D41"
                className={`group-hover:fill-white duration-300 ${
                  location.pathname === "/admin/group" ? "fill-white" : ""
                }`}
                viewBox="0 0 640 512"
              >
                <path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32l85.6 0c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4l-96 0c-35.3 0-64 28.7-64 64zm461.6 32l82.4 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-96 0c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4l-96 0c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z" />
              </svg>
            </div>
            <h3
              className={`text-[#1D1D41] group-hover:text-white duration-300 ${
                location.pathname === "/admin/group" ? "text-white" : ""
              }`}
            >
              Group
            </h3>
          </Link>
        </li>

        <li>
          <Link
            to="settings"
            className={`ps-[20px] py-[10px] group hover:bg-[#1D1D41] duration-300 flex items-center ${
              location.pathname === "/admin/settings" ? "bg-[#1D1D41]" : ""
            }`}
          >
            <div className="me-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#1D1D41"
                className={`group-hover:fill-white duration-300 ${
                  location.pathname === "/admin/settings" ? "fill-white" : ""
                }`}
                viewBox="0 0 512 512"
              >
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1-11 11.4-22.4 15.8-34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
              </svg>
            </div>
            <h3
              className={`text-[#1D1D41] group-hover:text-white duration-300 ${
                location.pathname === "/admin/settings" ? "text-white" : ""
              }`}
            >
              Settings
            </h3>
          </Link>
        </li>
      </ul>
      <button className="absolute flex items-center gap-[10px] bottom-[20px] left-[20px] text-[#1D1D41]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="#1D1D41"
          viewBox="0 0 512 512"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
        </svg>
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
