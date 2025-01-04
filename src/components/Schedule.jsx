import React from "react";
import LongCards from "./LongCards";
import Dropdown from "./Dropdown";
import dots from "../images/dots.png";

const Schedule = () => {
  return (
    <div className="bg-white  rounded-lg shadow border-2 border-gray-300">
      <div className="flex justify-between items-center md:p-4 p-2">
        <h2 className="text-md md:text-lg font-bold text-blue-900 mr-3">
          Upcoming Schedule
        </h2>
        <Dropdown />
      </div>
      <div className=" md:p-4 p-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Priority</h3>
        <ul className="space-y-4">
          <LongCards
            title={"Review candidate applications"}
            time={"Today - 11.30 AM"}
            ispin={false}
            pinsrc={""}
            dotsrc={dots}
          />
        </ul>
      </div>
      <div className="md:px-4 px-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Other</h3>
        <ul className="space-y-4">
          <LongCards
            title={"Interview with candidates"}
            time={"Today - 11.30 AM"}
            ispin={false}
            pinsrc={""}
            dotsrc={dots}
          />
          <LongCards
            title={"Short meeting with product designer"}
            time={"Today - 09.30 AM"}
            ispin={false}
            pinsrc={""}
            dotsrc={dots}
          />
        </ul>
      </div>
      <p className="text-textred text-xs md:text-sm py-1 border-t-2 border-gray-200 block text-center">
        Create a New Schedule
      </p>
    </div>
  );
};

export default Schedule;
