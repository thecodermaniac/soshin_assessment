import React from "react";
import Card from "./Card";
import Announcements from "./Announcements";
import RecentActivity from "./RecentActivity";
import Schedule from "./Schedule";
import Metrics from "./Metrics";
import Search from "./Search";

const Dashboard = () => {
  return (
    <div className=" bg-gray-50 min-h-screen pb-6">
      <header className="hidden md:flex justify-between items-center mb-8 py-6 ml-10">
        <Search />
        <div className="flex items-center gap-14 mr-8">
          <img width={18} height={18} src="src\images\bell.png" />
          <img width={18} height={18} src="src\images\msg.png" />
          <div className="flex items-center gap-2">
            <img width={42} height={42} src="src\images\user.png" />
            <div className="font-semibold">Admirra John</div>
          </div>
        </div>
      </header>
      <h1 className="text-2xl font-medium text-globaltextcolor mt-3 mx-4 md:mx-auto text-left md:max-w-[90%] mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mx-auto md:max-w-[90%]">
        <div className="md:col-span-3 mx-4 md:mx-0">
          <div className="grid md:grid-cols-3 grid-rows-1 gap-10 ">
            <Card
              title="Available Position"
              value="24"
              subtext="4 urgently needed"
              customclass="bg-dashred text-textred"
            />
            <Card
              title="Job Open"
              value="10"
              subtext="4 active hiring"
              customclass="bg-dashblue text-textblue"
            />
            <Card
              title="New Employees"
              value="24"
              subtext="4 department"
              customclass="bg-dashpink text-textpink"
            />
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-1 gap-10 mt-6">
            <Metrics
              title="Total Employees"
              value="216"
              subtext="+2% Past month"
              men="120"
              women="96"
              imgsrc={"src/images/graph_1.png"}
            />
            <Metrics
              title="Talent Request"
              value="16"
              subtext="-1% Past month"
              men="6"
              women="10"
              imgsrc={"src/images/graph_2.png"}
            />
          </div>
          <Announcements />
        </div>
        <div className="md:col-span-2 md:col-start-4 mx-4 md:mx-0">
          <RecentActivity />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
