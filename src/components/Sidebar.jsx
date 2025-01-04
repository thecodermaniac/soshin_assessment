import React from "react";
import SidebarOptions from "./SidebarOptions";

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
        src="src\images\logo.png"
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
            imgsrc="src\images\dash.png"
            option="Dashboard"
            customclass="text-textred"
          />
          <SidebarOptions
            imgsrc="src\images\recruit.png"
            option="Recruitment"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc="src\images\schedule.png"
            option="Schedule"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc="src\images\emp.png"
            option="Employee"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc="src\images\dept.png"
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
            imgsrc="src\images\support.png"
            option="Support"
            customclass="text-textgray"
          />
          <SidebarOptions
            imgsrc="src\images\set.png"
            option="Settings"
            customclass="text-textgray"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
