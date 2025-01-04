import React from "react";

const Card = ({ title, value, subtext, customclass }) => {
  return (
    <div className={`shadow rounded-lg p-4 ${customclass}`}>
      <h3 className="text-lg font-bold text-globaltextcolor">{title}</h3>
      <p className="text-2xl font-semibold text-globaltextcolor">{value}</p>
      <p className="text-sm">{subtext}</p>
    </div>
  );
};

export default Card;
