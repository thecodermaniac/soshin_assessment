import React, { useState } from "react";
import srh from "../images/srh.png";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Desktop View */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-grey-100">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-sm text-gray-700 bg-transparent focus:outline-none w-72"
        />
        <img src={srh} className="ml-2 h-5 w-5" />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <button
          type="button"
          className="p-2 rounded-md border-0 border-gray-300 shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleSearch}
        >
          <img src={srh} className="h-5 w-5 flex float-left" />
        </button>
        {isSearchOpen && (
          <input
            type="text"
            className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none absolute"
            placeholder="Search"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
