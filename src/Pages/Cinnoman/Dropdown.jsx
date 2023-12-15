import React, { useState } from "react";
import down from '../../img/up3.png';
import up from '../../img/down3.png';
import sl from '../../img/sl.jpg';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-white border border-slate-300 w-72 text-black px-4 py-2 rounded-lg relative items-center"
      >
        {selectedOption || "Select an Option"}{" "}
        {isDropdownOpen ? <img src={down} className="absolute w-5 inset-y-0 right-0 m-2" /> : <img src={up} className=" absolute inset-y-0 w-5 right-0 m-2 " />}
      </button>
      {isDropdownOpen && (
        <div className="absolute z-50 top-full left-0 bg-white border border-gray-300 rounded-lg mt-2 w-40">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
