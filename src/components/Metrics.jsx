import React from "react";

const Metrics = ({ title, value, subtext, men, women, imgsrc }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 grid grid-cols-5">
      <div className="col-span-3 gap-2">
        <h3 className="text-lg font-bold mb-2 text-globaltextcolor">{title}</h3>
        <p className="text-3xl font-semibold mr-4 text-globaltextcolor">
          {value}
        </p>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-xs text-textgray">{men} Men</p>
          <p className="text-xs text-textgray">{women} Women</p>
        </div>
      </div>

      <div className="col-span-2 col-start-4">
        <img className="" width={115} height={78} src={imgsrc} />
        <div className="text-xs text-textblack px-2 py-1 bg-dashred mt-3 text-center">
          {subtext}
        </div>
      </div>
      <div className="mt-4">{/* Placeholder for graph image */}</div>
    </div>
  );
};

export default Metrics;
