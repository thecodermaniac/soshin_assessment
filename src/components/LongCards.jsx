import React from "react";

const LongCards = ({ title, time, ispin, pinsrc, dotsrc }) => {
  return (
    <li className="flex items-center justify-between md:p-4 p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm my-4">
      <div className="w-fit">
        <h3 className="md:text-md font-medium text-sm text-textblack">
          {title}
        </h3>
        <p className="text-xs text-textgray">{time}</p>
      </div>
      <div className="flex items-center">
        {ispin && (
          <img
            className="text-textgray mx-2 cursor-pointer"
            src={pinsrc}
            width={18}
            height={18}
          />
        )}
        <img
          className="text-textgray cursor-pointer"
          src={dotsrc}
          width={18}
          height={18}
        />
      </div>
    </li>
  );
};

export default LongCards;
