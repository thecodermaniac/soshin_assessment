import React from "react";
import LongCards from "./LongCards";
import Dropdown from "./Dropdown";

const Announcements = () => {
  return (
    <div className="bg-white  rounded-lg shadow">
      <div className="flex justify-between items-center md:p-4 p-2">
        <h2 className="text-lg font-bold text-blue-900">Announcements</h2>
        <Dropdown />
      </div>
      <ul className="space-y-4 md:p-4 p-2">
        <LongCards
          title={"Outing schedule for every department"}
          time={"5 minutes ago"}
          ispin={true}
          pinsrc={"src/images/deep_pin.png"}
          dotsrc={"src/images/dots.png"}
        />
        <LongCards
          title={"Meeting HR Department"}
          time={"5 minutes ago"}
          ispin={true}
          pinsrc={"src/images/pin.png"}
          dotsrc={"src/images/dots.png"}
        />
        <LongCards
          title={
            "IT Department needs two more talents for UX/UI Designer position"
          }
          time={"5 minutes ago"}
          ispin={true}
          pinsrc={"src/images/pin.png"}
          dotsrc={"src/images/dots.png"}
        />
      </ul>
      <p className="text-textred text-xs md:text-sm py-1 border-t-2 border-gray-200 block text-center">
        See All Announcements
      </p>
    </div>
  );
};

export default Announcements;
