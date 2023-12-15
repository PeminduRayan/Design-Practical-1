import React, { useState } from "react";
import { Link } from "react-router-dom";
import down from "../../img/up2.png";
import up from "../../img/down2.png";

export default function LowerHeader() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);
  const [isExpDropdownOpen, setIsExpDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const handleAboutDropdownToggle = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    closeOtherDropdowns("about");
  };

  const handleRoomsDropdownToggle = () => {
    setIsRoomsDropdownOpen(!isRoomsDropdownOpen);
    closeOtherDropdowns("rooms");
  };

  const handleExpDropdownToggle = () => {
    setIsExpDropdownOpen(!isExpDropdownOpen);
    closeOtherDropdowns("experience");
  };

  const handleEventDropdownToggle = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
    closeOtherDropdowns("events");
  };

  const handleAboutOptionSelect = (option) => {
    console.log(`About: ${option}`);
    setIsAboutDropdownOpen(false);
  };

  const handleRoomsOptionSelect = (option) => {
    console.log(`Rooms: ${option}`);
    setIsRoomsDropdownOpen(false);
  };

  const handleExpOptionSelect = (option) => {
    console.log(`Experience: ${option}`);
    setIsExpDropdownOpen(false);
  };

  const handleEventOptionSelect = (option) => {
    console.log(`Events: ${option}`);
    setIsEventDropdownOpen(false);
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== "about") setIsAboutDropdownOpen(false);
    if (currentDropdown !== "rooms") setIsRoomsDropdownOpen(false);
    if (currentDropdown !== "experience") setIsExpDropdownOpen(false);
    if (currentDropdown !== "events") setIsEventDropdownOpen(false);
  };

  return (
    <div className="items-center justify-between relative z-10">
      <div className="ml-8 bg-[#343a40] text-white w-full rounded-md gap-9 flex flex-row p-3 md:ml-0 relative">
        {/* About */}
        <button
          onMouseEnter={handleAboutDropdownToggle}
          className="text-md hover:bg-white hover:h-full hover:text-black invisible sm:visible font-serif gap-2 flex items-center"
        >
          About
          <img
            src={isAboutDropdownOpen ? up : down}
            alt=""
            className="w-[20px] h-[20px]"
          />
        </button>
        <div
          className={`absolute ${
            isAboutDropdownOpen ? "block" : "hidden"
          } mt-6 w-full text-black space-y-2 bg-white rounded-md shadow-lg`}
        >
          About the Hotel
          <Link
            to="/option1"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleAboutOptionSelect("about1")}
          >
            About 1
          </Link>
          <Link
            to="/option2"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleAboutOptionSelect("about2")}
          >
            About 2
          </Link>
          <Link
            to="/option3"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleAboutOptionSelect("about3")}
          >
            About 3
          </Link>
        </div>

        {/* Rooms */}
        <button
          onMouseEnter={handleRoomsDropdownToggle}
          className="text-md hover:bg-white hover:h-full hover:text-black invisible sm:visible font-serif gap-2 flex items-center"
        >
          Rooms
          <img
            src={isRoomsDropdownOpen ? up : down}
            alt=""
            className="w-[20px] h-[20px]"
          />
        </button>
        <div
          className={`absolute ${
            isRoomsDropdownOpen ? "block" : "hidden"
          } mt-6 w-full text-black space-y-2 bg-white rounded-md shadow-lg`}
        >
          Room Options
          <Link
            to="/room1"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleRoomsOptionSelect("room1")}
          >
            Room 1
          </Link>
          <Link
            to="/room2"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleRoomsOptionSelect("room2")}
          >
            Room 2
          </Link>
        </div>

        {/* Experience */}
        <button
          onMouseEnter={handleExpDropdownToggle}
          className="text-md hover:bg-white hover:h-full hover:text-black invisible sm:visible font-serif gap-2 flex items-center"
        >
          Experience
          <img
            src={isExpDropdownOpen ? up : down}
            alt=""
            className="w-[20px] h-[20px]"
          />
        </button>
        <div
          className={`absolute ${
            isExpDropdownOpen ? "block" : "hidden"
          } mt-6 w-full text-black space-y-2 bg-white rounded-md shadow-lg`}
        >
          Experience Options
          <Link
            to="/exp1"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleExpOptionSelect("exp1")}
          >
            Experience 1
          </Link>
          <Link
            to="/exp2"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleExpOptionSelect("exp2")}
          >
            Experience 2
          </Link>
        </div>

        {/* Events  */}
        <button
          onMouseEnter={handleEventDropdownToggle}
          className="text-md hover:bg-white hover:h-full hover:text-black invisible sm:visible font-serif gap-2 flex items-center"
        >
          Events
          <img
            src={isEventDropdownOpen ? up : down}
            alt=""
            className="w-[20px] h-[20px]"
          />
        </button>
        <div
          className={`absolute ${
            isEventDropdownOpen ? "block" : "hidden"
          } mt-6 w-full text-black space-y-2 bg-white rounded-md shadow-lg`}
        >
          Event Options
          <Link
            to="/event1"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleEventOptionSelect("event1")}
          >
            Event 1
          </Link>
          <Link
            to="/event2"
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={() => handleEventOptionSelect("event2")}
          >
            Event 2
          </Link>
        </div>
        <button className="border border-white p-1 text-sm absolute top-2 right-4  uppercase font-inter">Find A Hotel</button>
      </div>
    </div>
  );
}
