import React from "react";
import InputField from "../../constants/InputField/InputFiled";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-bold text-[24px] text-[#000] leading-normal w-full text-center max-w-[294px] mb-[54px]">
            WELCOME TO LIBRARY
          </h2>
          <form className="w-[311px]">
            <InputField
              type={"text"}
              label="Username"
              placeholder="Enter Your Username"
            />
            <InputField
              type={"password"}
              label="Password"
              placeholder="Enter Your Username"
            />
            {/* <Link to="/information"> */}
            <button className="text-[14px] w-[311px] py-[15px] text-[#fff] bg-[#000] font-bold leading-normal">
              Login
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
  );
};

export default Login;
