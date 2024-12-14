// src/views/betslip/BetslipView.jsx
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

function Betslip() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameMenu, setGameMenu] = useState("Progress"); // Initially set to "Progress"

  const menuItems = [
    { label: "Progress" },
    { label: "Benefit" },
];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" inline-block text-left mb-4">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                MyBet
              </a>
              <a
                href="#"
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

      {/* BetSlip content */}
      <p>Your bets will appear here.</p>
    </div>
  );
}

export default Betslip;
