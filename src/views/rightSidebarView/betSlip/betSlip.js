import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { IconButton, Typography, FormControl, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MdOutlineEventNote } from "react-icons/md";
import sportsTable from "../../../assets/img/sportsTable.png";
import { PiCurrencyBtcFill } from "react-icons/pi";
import MyAllBet from "./pageview/myAllBet";


function Betslip({ onClose }) {
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

  return (
    <div className="h-screen bg-[#0f212e] ">
      <div className="relative text-white p-2 rounded-md shadow-lg">
        <IconButton
          onClick={onClose}
          sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* BetSlip dropdown button */}
        <div className="inline-block text-left mb-4">
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
          >
            <MdOutlineEventNote size={20} color="#0ffff" />
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
              <div className="absolute top-full shadow-lgleft-1/2 mt-2 bg-white text-black font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max text-center">
                <button
                  onClick={() => setSelectedView("BetSlip")}
                  className={`text-gray-700 block px-4 py-2 text-sm ${selectedView === "Bet Slip" && "font-bold"
                    }`}
                >
                  Bet Slip
                </button>
                <button
                  onClick={() => setSelectedView("My Bets")}
                  className={`text-gray-700 block px-4 py-2 text-sm ${selectedView === "My Bets" && "font-bold"
                    }`}
                >
                  My Bets
                </button>

                {/* Tooltip Arrow */}
                <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
              </div>
            </div>
          )}
        </div>
        {selectedView === "BetSlip" ? (
          <div>
            <div>
            <div className="bg-[#1a2c38], text-white">
                <div className="flex flex-col items-center justify-start h-full bg-[#0f212e]">
                  <div className="flex justify-center w-full mb-4">
                    <div className=" bg-[#1a2c38] flex rounded-full p-[4px] space-x-1 font-bold">
                      {menuItems.map((item) => (
                        <button
                          key={item.label}
                          className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
                          onClick={() => setGameMenu(item.label)}
                        >
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
                  <span className="text-left left-0">Accept Any Odds</span>
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
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max text-center">
                    <button
                      onClick={() => console.log("Accept Any Odds Clicked")}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Accept Any Odds
                    </button>
                    <button
                      onClick={() => console.log("Accept Only Higher Odds Clicked")}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Accept Only Higher Odds
                    </button>
                    <button
                      onClick={() => console.log("No Odds Changes Accepted Clicked")}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      No Odds Changes Accepted
                    </button>

                    {/* Tooltip Arrow */}
                    <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              )}

              {/* Empty Bet Slip Message */}
              <div className="flex justify-center p-20">
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
                    <button className="text-white bg-sky-600 py-2 px-6 rounded font-medium">
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
        ) : (
          <MyAllBet />
        )}

      </div>

    </div>

  );
}
export default Betslip
