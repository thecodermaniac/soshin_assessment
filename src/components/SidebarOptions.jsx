import React from "react";

const SidebarOptions = ({ imgsrc, option, customclass }) => {
  return (
    <li className={`flex items-center ${customclass}`}>
      <img className="w-5 h-5 rounded mr-6" src={imgsrc} />
      {option}
    </li>
  );
};

export default SidebarOptions;
