import React from "react";
import SidebarOptions from "./SidebarOptions";
import logo from "../images/logo.png";
import dash from "../images/dash.png";
import recruit from "../images/recruit.png";
import schedule from "../images/schedule.png";
import emp from "../images/emp.png";
import dept from "../images/dept.png";
import support from "../images/support.png";
import set from "../images/set.png";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-gray-100 p-4 z-50 min-h-screen transform ${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 md:translate-x-0 md:static md:w-1/5`}
    >
      {/* Replace with actual logo */}
      <img
        className="bg-transparent rounded ml-6 mb-6"
        src={logo}
        width={143}
        height={37}
      />
      <button
        className="md:hidden absolute top-4 right-4 text-2xl"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="mb-6 ml-4">
        <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4">
          Main Menu
        </h3>
        <ul className="space-y-4">
          <SidebarOptions
            imgsrc={dash}
            option="Dashboard"
            customclass="text-textred"
          />
          <SidebarOptions
            imgsrc={recruit}
            option="Recruitment"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc={schedule}
            option="Schedule"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc={emp}
            option="Employee"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc={dept}
            option="Department"
            customclass="text-textgray"
          />
        </ul>
      </div>
      <div className="ml-4">
        <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4">
          Other
        </h3>
        <ul className="space-y-4">
          <SidebarOptions
            imgsrc={support}
            option="Support"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc={set}
            option="Settings"
            customclass="text-textgray"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
