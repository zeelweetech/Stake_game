
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { IconButton, Typography, FormControl, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MdOutlineEventNote } from "react-icons/md";
import sportsTable from "../../../assets/img/sportsTable.png";
import { PiCurrencyBtcFill } from "react-icons/pi";
import MyAllBet from "./pageview/myAllBet";
import { useSelector } from "react-redux";

function Betslip({ onClose, isDrawerOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [gameMenu, setGameMenu] = useState("Single");
  const [tooltip, setTooltip] = useState(false);
  const [amountError, setAmountError] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedView, setSelectedView] = useState("Bet Slip");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleTooltip = () => {
    setTooltip(!tooltip);
  };

  const handleViewChange = (view) => {
    setSelectedView(view);
    setDropdownOpen(false);
  };


  const handleAmountChange = (value) => {
    const parsedValue = parseFloat(value);
    if (parsedValue < 1e-8 && value !== "") {
      setAmountError("The minimum value is 1e-8.");
    } else {
      setAmountError("");
    }
    setAmount(value);
  };

  const menuItems = [
    { label: "Single" },
    { label: "Multi" },
  ];

  const betSlipIcon = (
    <svg
    className="w-4 h-4 text-white mr-2"
    fill="currentColor"
    viewBox="0 0 64 64"
    >
      <path d="M.001 3.549v7.12h7.12v49.786h6.214c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h9.974c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h6.16V10.665h7.066v-7.12L.001 3.549Zm35.546 37.334h-17.76v-5.334h17.76v5.334Zm10.668-14.214H17.789v-5.334h28.426v5.334Z" />
    </svg>
  );

  // SVG Path for My Bets Icon
  const myBetsIcon = (
    <svg
    className="w-4 h-4 text-white mr-2"
    fill="currentColor"
    viewBox="0 0 64 64"
    >
      <path d="M63.998 14.213H14.215v49.783h6.16c.8-3.108 3.576-5.366 6.88-5.366a7.1 7.1 0 0 1 6.869 5.318l.01.05h9.945c.8-3.108 3.576-5.366 6.88-5.366s6.08 2.26 6.87 5.318l.01.05h6.159V14.213ZM27.946 51.251l-6.613-6.694 3.785-3.785 2.934 2.933 7.76-7.76 3.654 3.786-11.52 11.52Zm28.932-4.32H45.625v-5.334h11.253v5.334Zm0-18.479H21.335V23.12h35.543v5.333ZM49.785 0v7.12H7.122v42.663H.002V0h49.783Z" />
    </svg>
  );
  console.log("?sdfgsdfgm?????smvsv");

  return (
    <div className="text-white rounded-md shadow-lg">
      <div className="text-white rounded-md shadow-lg">
        <IconButton
          onClick={onClose}
          sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        {/* BetSlip dropdown button */}
        <div className="inline-block text-left mb-4 py-2">
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
          >
            {/* <MdOutlineEventNote size={20} color="#0ffff" /> */}
            {selectedView === "Bet Slip" ? betSlipIcon : myBetsIcon}
            <span className="ml-2">{selectedView}</span>
            {dropdownOpen ? (
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            ) : (
              <ChevronUpIcon className="ml-2 h-5 w-5" />
            )}
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="relative">
              <div className="absolute top-full shadow-lg left-1/2 mt-2 bg-white text-black font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max text-center">

                <button
                  onClick={() => handleViewChange("Bet Slip")}
                  className={`text-gray-700 block py-1 text-sm ${selectedView === "Bet Slip" && "font-bold"}`}
                >
                  Bet Slip
                </button>
                <button
                  onClick={() => handleViewChange("My Bets")}
                  className={`text-gray-700 block py-1 text-sm ${selectedView === "My Bets" && "font-bold"}`}
                >
                  My Bets
                </button>

                {/* Tooltip Arrow */}
                <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
              </div>
            </div>
          )}
        </div>

        {selectedView === "Bet Slip" ? (
          <div>
            <div>
              <div className="bg-[#1a2c38] text-white">
                <div className="flex flex-col items-center justify-start h-full bg-[#0f212e]">
                  <div className="flex justify-center w-full mb-4">
                    <div className="bg-[#1a2c38] flex rounded-full p-[4px] space-x-1 font-bold">
                      {menuItems.map((item) => (
                        <button
                          key={item.label}
                          className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
                          onClick={() => setGameMenu(item.label)}
                        >
                          {item.label === "Single" && (
                            <svg
                              className="w-4 h-4 text-white mr-2"
                              fill="currentColor"
                              viewBox="0 0 64 64"
                            >
                              <path d="M16.134 63.996.002 47.997a5.474 5.474 0 0 0 1.728-4A5.48 5.48 0 0 0 .003 40l-.002-.002L40 0a5.474 5.474 0 0 0 4 1.728A5.48 5.48 0 0 0 47.996.002L47.998 0l16 16.133a5.474 5.474 0 0 0-1.658 3.934 5.47 5.47 0 0 0 1.657 3.931L64 24 24.002 63.998a5.475 5.475 0 0 0-3.934-1.658 5.47 5.47 0 0 0-3.931 1.658l-.003.002v-.004Z" />
                            </svg>
                          )}
                          {item.label === "Multi" && (
                            <svg
                              className="w-4 h-4 text-white mr-2"
                              fill="currentColor"
                              viewBox="0 0 64 64"
                            >
                              <path d="M45.708 9.146 36.562 0a6.408 6.408 0 0 1-4.56 1.898A6.408 6.408 0 0 1 27.442 0L.002 27.44A6.408 6.408 0 0 1 1.898 32 6.408 6.408 0 0 1 0 36.56l9.146 9.146a6.481 6.481 0 0 1 9.14 9.154l.007-.006L27.439 64A6.408 6.408 0 0 1 32 62.102c1.783 0 3.396.726 4.56 1.898L64 36.56A6.408 6.408 0 0 1 62.101 32c0-1.782.727-3.396 1.898-4.56l-9.146-9.146a6.481 6.481 0 0 1-9.14-9.154l-.005.006ZM28.002 40.56 24.561 44l-4.56-4.56 3.44-3.44 4.56 4.56Zm8-8L32.562 36l-4.56-4.56 3.44-3.44 4.56 4.56Zm8-8L40.562 28l-4.56-4.56 3.44-3.44 4.56 4.56Z" />
                            </svg>
                          )}
                          <p className="text-white">{item.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-t-2 border-gray-600" />

              {/* Clear All Button */}
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={toggleTooltip}
                  className="bg-[#0f212e] text-sm font-medium text-white flex items-center"
                >
                  <span className="left-0 text-left px-3">Accept Any Odds</span>
                  {tooltip ? (
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  ) : (
                    <ChevronUpIcon className="ml-2 h-5 w-5" />
                  )}
                </button>
                <div className="relative">
                  <button
                    onClick={() => console.log("Clear All Clicked")}
                    className="text-xs text-white font-medium cursor-pointer px-2 py-1"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Tooltip Menu */}
              {tooltip && (
                <div className="relative">
                  <div className="absolute top-full transform -translate-x-1/2 left-32 mt-2 bg-white text-black text-sm font-medium rounded-sm px-2 py-2 shadow-sm z-10 w-max text-center">
                    <button
                      onClick={() => console.log("Accept Any Odds Clicked")}
                      className="text-gray-700 p-2 block text-sm"
                    >
                      Accept Any Odds
                    </button>
                    <button
                      onClick={() => console.log("Accept Only Higher Odds Clicked")}
                      className="text-gray-700 p-2 block text-sm"
                    >
                      Accept Only Higher Odds
                    </button>
                    <button
                      onClick={() => console.log("No Odds Changes Accepted Clicked")}
                      className="text-gray-700 p-2 block text-sm"
                    >
                      No Odds Changes Accepted
                    </button>

                    {/* Tooltip Arrow */}
                    <div className="tooltip-arrow w-2 h-3 left-32 bg-white rotate-45 absolute top-[-6px] transform -translate-x-1/2"></div>
                  </div>
                </div>
              )}

              {/* Empty Bet Slip Message */}
              <div className="flex justify-center md:h-[22rem] p-20">
                <div>
                  <div className="flex justify-center">
                    <img src={sportsTable} alt="Sports" />
                  </div>
                  <p className="text-xs">Bet Slip Is Empty.</p>
                  <p className="text-xs">Start Betting Now!</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5">
                {gameMenu === "Single" ? (
                  <div className="bg-[#213743] p-4 space-y-2 ">
                    {/* Total Stake Section */}
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-white">Total Stake</p>
                      <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                    </div>

                    {/* Est. Payout Section */}
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-white">Est. Payout</p>
                      <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                    </div>

                    {/* Place Single Button */}
                    <div className="text-center">
                      <button className="text-white bg-sky-600 text-sm p-2 w-80 rounded font-medium">
                        Place Single Button
                      </button>
                    </div>
                  </div>
                ) : gameMenu === "Multi" ? (
                  <div>
                    <div className="w-full flex flex-col mt-4">
                      <FormControl sx={{ width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#0f212e",
                            padding: "8px 12px",
                            border: "1px solid #b1bad3",
                            borderRadius: "4px",
                            color: "white",
                            gap: "8px",
                          }}
                        >
                          <TextField
                            type="number"
                            value={amount}
                            onChange={(e) => handleAmountChange(e.target.value)}
                            InputProps={{
                              inputProps: { min: 0 },
                            }}
                            sx={{
                              flexGrow: 1,
                              backgroundColor: "transparent",
                              input: { color: "white" },
                              "& .MuiOutlinedInput-root": {
                                height: "25px",
                                "& fieldset": { border: "none" },
                              },
                            }}
                          />
                          <PiCurrencyBtcFill color="#FFD700" />
                        </div>
                      </FormControl>
                    </div>

                    {/* Total Stake and Est. Payout for Multi */}
                    <div className="bg-[#213743] p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-white">Total Stake</p>
                        <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-xs text-white">Est. Payout</p>
                        <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <MyAllBet />
        )}
      </div>
    </div>
  );
}

export default Betslip;
