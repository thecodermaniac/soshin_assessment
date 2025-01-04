import React from "react";
import LongCards from "./LongCards";
import Dropdown from "./Dropdown";
import deeppin from "../images/deep_pin.png";
import pin from "../images/pin.png";
import dots from "../images/dots.png";

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
          pinsrc={deeppin}
          dotsrc={dots}
        />
        <LongCards
          title={"Meeting HR Department"}
          time={"5 minutes ago"}
          ispin={true}
          pinsrc={pin}
          dotsrc={dots}
        />
        <LongCards
          title={
            "IT Department needs two more talents for UX/UI Designer position"
          }
          time={"5 minutes ago"}
          ispin={true}
          pinsrc={pin}
          dotsrc={dots}
        />
      </ul>
      <p className="text-textred text-xs md:text-sm py-1 border-t-2 border-gray-200 block text-center">
        See All Announcements
      </p>
    </div>
  );
};

export default Announcements;
