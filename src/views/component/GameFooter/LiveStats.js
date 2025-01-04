import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

function LiveStats({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("All");
  const [isRotated, setIsRotated] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTooltipVisible(false);
  };
  const handleClick = () => {
    setIsRotated(!isRotated);
    setTooltipVisible(!tooltipVisible);
  };
  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };
  const handleCloseLiveStats = () => {
    setTooltipVisible(false);
    onClose();
  };

  return (
    <Draggable axis="x"> 
    {/* if any time changes drag the content horizontal and vertical then it will be fixed position is "axix="both" */}
      <div
        className="fixed inset-0 flex items-end justify-end bg-scroll h-full z-9999"
        onClick={handleCloseLiveStats}
      >
        <div
          className="bg-[#213743] text-white rounded-lg shadow-lg w-72 relative  md:ml-44 mr-20 bg-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pl-4 bg-[#1a2c38] h-10 cursor-move rounded-t-lg">
            <h2 className="text-base font-semibold flex items-center gap-2 ">
              <span>
                <svg
                  className="w-4 h-4 text-[#b1bad3]"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M33.013 19.707 64 0v12.64L30.987 33.627 18.133 18.853 0 30.693V17.947L20.107 4.853l12.906 14.854ZM16 64H5.333V35.173L16 28.213V64Zm13.707-21.653-3.04-3.52V64h10.666V37.493l-2.773 1.76-4.853 3.094ZM58.667 64H48V30.72l10.667-6.8V64ZZ" />
                </svg>
              </span>
              Live Stats
            </h2>
            <button
              className="text-gray-400 hover:text-white w-4 h-4 p-3 flex justify-center items-center"
              onClick={() => handleCloseLiveStats()}
            >
              ✖
            </button>
          </div>
          <div className="flex justify-between items-start px-4 ">
            <div className="relative bg-[#0f212e] flex rounded-full p-[5px] mt-3 w-18 h-10">
              <button
                onClick={toggleTooltip}
                className="focus:outline-none flex items-center justify-center space-x-4"
                aria-label="Toggle Tooltip"
              >
                <span className="px-1">{selectedOption}</span>
                <svg
                  onClick={handleClick}
                  className={`w-4 h-4 text-[#b1bad3] transition-transform duration-300 ${isRotated ? "rotate-180" : ""
                    }`}
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z" />
                </svg>
              </button>

              {tooltipVisible && (
                <div className="absolute top-full left-0 mt-4 ml-1 text-center py-2 w-14 bg-white text-[#2F4553] rounded shadow">
                  <div
                    onClick={() => handleOptionClick("All")}
                    className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${selectedOption === "All" ? "text-[#1475E1]" : ""
                      }`}
                  >
                    All
                  </div>
                  <div
                    onClick={() => handleOptionClick("Bets")}
                    className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${selectedOption === "Bets" ? "text-[#1475E1]" : ""
                      }`}
                  >
                    Bets
                 </div>
                  <div
                    onClick={() => handleOptionClick("Race")}
                    className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${selectedOption === "Race" ? "text-[#1475E1]" : ""
                      }`}
                  >
                    Race
                  </div>
                  <div
                    onClick={() => {
                      handleCloseLiveStats();
                    }}
                    className="hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer"
                  >
                    Hide
                  </div>
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute top-[-6px] left-[1.7rem] transform -translate-x-1/2"></div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button className="text-gray-400 hover:text-white w-5 h-5 p-5 mt-3 flex justify-center items-center group">
                <span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    className="w-4 h-4"
                  >
                    <path d="M31.943 13.08c-9.37 0-17.128 6.904-18.476 16.004l4.798-.002-9.146 12.96-9.12-12.96h5.334l.012-.124C6.889 15.536 18.291 5.112 32.127 5.112a26.823 26.823 0 0 1 17.5 6.452l-5.334 6.186.02.018a18.584 18.584 0 0 0-12.37-4.688Zm22.937 8.752L64 34.792h-5.174l-.01.12C57.332 48.398 45.902 58.888 32.02 58.888a26.826 26.826 0 0 1-17.646-6.576l5.334-6.186a18.597 18.597 0 0 0 12.47 4.776c9.406 0 17.188-6.96 18.49-16.11h-4.934l9.146-12.96ZM19.708 46.126l-.016-.014.016.014Z" />
                  </svg>
                </span>
              </button>
              <div className="absolute left-1/2 w-32 h-10 -mt-16 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                Reset Live Stats
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          {selectedOption === "All" ? (
            <div className="w-72 bg-[#213743] rounded-lg px-4 py-3 space-y-3">
              <div className="grid grid-cols-2 gap-2 bg-[#0f212e] p-4 rounded-lg">
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Profit</p>
                  <p className="text-[#00E701] font-bold text-sm">0.00 ₹</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Wins</p>
                  <p className="text-[#00E701] font-bold text-base">0</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Wagered</p>
                  <p className="font-bold text-sm">0.00 ₹</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Losses</p>
                  <p className="text-[#ED4163] font-bold text-base">0</p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center w-64 h-56 bg-[#0f212e] rounded-md p-4">
                <div className="flex items-center space-x-1">
                  <span className="text-[#00E701] text-base font-semibold">
                    0.00 ₹
                  </span>
                </div>
                <div className="flex-grow flex items-center justify-center w-20 h-20"></div>
                <div className="w-full">
                  <input
                    type="range"
                    className="w-full h-0.5 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
              </div>

              <div className="bg-[#0f212e] h-36 p-2 rounded-lg space-y-2">
                <div className="flex justify-between items-center p-2">
                  <p className="font-semibold text-sm">$10m Christmas Race</p>
                  <button>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <p className="text-[#b1bad3] text-md py-6 p-2 font-semibold flex justify-center items-center">
                  Wager to enter the race!
                </p>
              </div>
            </div>
          ) : selectedOption === "Bets" ? (
            <div className="w-72 bg-[#213743] rounded-lg px-4 py-3 space-y-3">
              <div className="grid grid-cols-2 gap-2 bg-[#0f212e] p-4 rounded-lg">
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Total Bets</p>
                  <p className="text-[#00E701] font-bold text-sm">0.00 ₹</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Wins</p>
                  <p className="text-[#00E701] font-bold text-base">0</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Wagered</p>
                  <p className="font-bold text-sm">0.00 ₹</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Losses</p>
                  <p className="text-[#ED4163] font-bold text-base">0</p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center w-64 h-56 bg-[#0f212e] rounded-md p-4">
                <div className="flex items-center space-x-1">
                  <span className="text-[#00E701] text-base font-semibold">
                    0.00 ₹
                  </span>
                </div>

                <div className="flex-grow flex items-center justify-center w-20 h-20"></div>

                <div className="w-full">
                  <input
                    type="range"
                    className="w-full h-0.5 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
              </div>
            </div>
          ) : selectedOption === "Race" ? (
            <div className="w-72 bg-[#213743] rounded-lg px-4 py-3 space-y-3">
              <div className="bg-[#0f212e] h-36 p-2 rounded-lg space-y-2">
                <div className="flex justify-between items-center p-2">
                  <p className="font-semibold text-sm">$10m Christmas Race</p>
                  <button>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <p className="text-[#b1bad3] text-md py-6 p-2 font-semibold flex justify-center items-center">
                  Wager to enter the race!
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Draggable>
  );
}

export default LiveStats;
