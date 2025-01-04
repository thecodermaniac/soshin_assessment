import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="w-full">
        <header className="flex items-center justify-between p-4 bg-white shadow md:hidden border-b-2 border-gray-100">
          <div className="flex items-center gap-4">
            <button
              className="text-2xl text-textgray"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰
            </button>
            <Search />
          </div>

          <div className="flex items-center gap-4 mr-2">
            <img width={16} height={16} src="src\images\bell.png" />
            <img width={16} height={16} src="src\images\msg.png" />
            <div className="flex items-center gap-2">
              <img width={42} height={42} src="src\images\user.png" />
            </div>
          </div>
        </header>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
