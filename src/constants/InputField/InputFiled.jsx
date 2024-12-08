import React from "react";

const InputField = ({ label, placeholder,onChange,type }) => {
  return (
    <div className="flex flex-col mb-[14px]">
      <label className="font-bold text-[14px] mb-[6px] leading-[20px] tracking-[-0.5px]">
        {label} <span className="text-[#E92424]">*</span>
      </label>
      <input
        className="outline-none bg-[#F5F5F5] py-[14px] ps-[14px] w-full placeholder:italic placeholder:font-extralight placeholder:text-[#999] placeholder:text-[14px]"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
