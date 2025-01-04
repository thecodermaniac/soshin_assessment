import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-globaltextcolor text-white rounded-lg shadow mb-6">
      <h2 className="text-lg font-bold md:mb-4 bg-blue-900 px-6 py-2 rounded-t-lg">
        Recently Activity
      </h2>
      <div className="p-6">
        <p className="text-xs text-gray-300 mb-2">10:40 AM, Fri 10 Sept 2021</p>
        <h3 className="md:text-xl text-md font-semibold mb-2">
          You Posted a New Job
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className="flex justify-between items-center">
          <p className="md:text-sm text-xs font-medium">
            Today you makes 12 Activity
          </p>
          <button className="bg-red-500 text-white md:px-4 px-2 md:py-2 py-1 rounded-md text-xs font-medium">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
