import React, { useState } from "react";

import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-0">
      <UpperHeader/>
      <LowerHeader/>

      {/* ////// */}
      {/* Lower start */}







      {/* Lower end */}
    </div>
  );
}
