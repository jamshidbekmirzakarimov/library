import React from "react";
const Button = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex gap-[10px] SFPro items-center text-[14px] font-normal bg-[#1D1D41] text-white rounded-[5px] py-[7px] px-[14px]  ${className}`}
    >
      <svg
        width={20}
        height={20}
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
      </svg>
      {children}
    </button>
  );
};

export default Button;
