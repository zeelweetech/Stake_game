// src/views/betslip/BetslipView.jsx
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import myAllBet from "../betSlip/pageview/myAllBet"

function Betslip() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameMenu, setGameMenu] = useState("Single"); 

  const menuItems = [
    { label: "Single" },
    { label: "Multi" },
];
 const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" inline-block text-left mb-4">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border bg-[#0f212e] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2"
        >
          <span>BetSlip</span>
          {/* Display either ChevronDownIcon or ChevronRightIcon based on isOpen */}
          {isOpen ? (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          )}
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="origin-top-right right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                onClick={<myAllBet/>}
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                my Bets 
              </button>
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                BetSlip
              </a>
            </div>
          </div>
        )}
      </div>
      <div>

      </div>

     
    </div>
  );
}

export default Betslip;
