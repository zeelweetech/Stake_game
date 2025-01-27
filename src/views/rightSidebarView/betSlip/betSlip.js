import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  IconButton,
  // FormControl,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import sportsTable from "../../../assets/img/sportsTable.png";
// import { PiCurrencyBtcFill } from "react-icons/pi";
import MyAllBet from "./pageview/myAllBet";
import { ReactComponent as BetSlip } from "../../../assets/svg/BetSlip.svg";
import { ReactComponent as MyBet } from "../../../assets/svg/MyBet.svg";
function Betslip({ onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [gameMenu, setGameMenu] = useState("Single");
  const [tooltip, setTooltip] = useState(false);
  const [amountError, setAmountError] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedView, setSelectedView] = useState("Bet Slip");
  const betSlipRef = useRef(null);
  const tooltipRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setTooltip(false);
  };

  const toggleTooltip = () => {
    setTooltip(!tooltip);
    setDropdownOpen(false);
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

  const menuItems = [{ label: "Single" }, { label: "Multi" }];
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isDropdownClick =
        betSlipRef.current && betSlipRef.current.contains(event.target);
      const isTooltipClick =
        tooltipRef.current && tooltipRef.current.contains(event.target);

      if (!isDropdownClick && !isTooltipClick) {
        setDropdownOpen(false);
        setTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen, tooltip]);

  return (
    <div className="bg-[#0f212e]">
      <div className="text-white rounded-md shadow-lg relative">
        <IconButton
          onClick={onClose}
          sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        {/* {/ BetSlip dropdown button /} */}
        <div className="inline-block text-left mb-4 py-2" ref={betSlipRef}>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
          >
            {/* {/ <MdOutlineEventNote size={20} color="#0ffff" /> /} */}
            {selectedView === "Bet Slip" ? (
              <BetSlip className="w-4 h-4 mr-2" />
            ) : (
              <MyBet className="w-4 h-4 mr-2" />
            )}
            <span className="ml-2">{selectedView}</span>
            {dropdownOpen ? (
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            ) : (
              <ChevronUpIcon className="ml-2 h-5 w-5" />
            )}
          </button>

          {/* {/ Dropdown Menu /} */}
          {dropdownOpen && (
            <div className="relative" ref={betSlipRef}>
              <div className="absolute top-full shadow-lg left-1/2 mt-2 bg-white text-black font-medium rounded-sm px-4 py-2 z-10 w-max text-center">
                <button
                  onClick={() => handleViewChange("Bet Slip")}
                  className={`text-gray-700 block py-1 text-sm ${
                    selectedView === "Bet Slip" && "font-bold"
                  }`}
                >
                  Bet Slip
                </button>
                <button
                  onClick={() => handleViewChange("My Bets")}
                  className={`text-gray-700 block py-1 text-sm ${
                    selectedView === "My Bets" && "font-bold"
                  }`}
                >
                  My Bets
                </button>

                {/* {/ Tooltip Arrow /} */}
                <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
              </div>
            </div>
          )}
        </div>

        {selectedView === "Bet Slip" ? (
          <div>
            <div className="min-h-screen">
              <div className="bg-[#1a2c38] text-white">
                <div className="flex flex-col items-center justify-start h-full bg-[#0f212e]">
                  <div className="flex justify-center w-full mb-4">
                    <div className="bg-[#1a2c38] flex rounded-full p-[4px] space-x-1 font-bold">
                      {menuItems.map((item) => (
                        <button
                          key={item.label}
                          className={`py-2 px-5 rounded-full flex justify-center items-center text-sm ${
                            gameMenu === item.label
                              ? "bg-[#4d718768]"
                              : "hover:bg-[#4d718768]"
                          }`}
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

              {/* {/ Clear All Button /} */}
              <div
                className="flex justify-between items-center pt-2 px-3 py-2"
                ref={tooltipRef}
              >
                <button
                  onClick={toggleTooltip}
                  className="bg-[#0f212e] text-sm font-medium text-[#B1BAD3] gap-2 flex items-center group"
                >
                  <span className="left-0 text-left hover:text-white ">
                    Accept Any Odds
                  </span>
                  {tooltip ? (
                    <ChevronDownIcon className=" h-5 w-5 group-hover:text-white" />
                  ) : (
                    <ChevronUpIcon className=" h-5 w-5 group-hover:text-white" />
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

              {/* {/ Tooltip Menu /} */}
              {tooltip && (
                <div className="relative" ref={tooltipRef}>
                  <div
                    className="absolute top-full transform  -translate-x-1/2 left-32 mt-2 bg-white text-black text-sm font-medium rounded-sm  py-2 shadow-sm z-10 w-max text-center"
                    ref={tooltipRef}
                  >
                    <button
                      onClick={() => console.log("Accept Any Odds Clicked")}
                      className="text-gray-700 p-2 block text-sm text-start hover:bg-[#B1BAD3] w-full"
                    >
                      Accept Any Odds
                    </button>
                    <button
                      onClick={() =>
                        console.log("Accept Only Higher Odds Clicked")
                      }
                      className="text-gray-700 p-2 block text-sm text-start hover:bg-[#B1BAD3] w-full"
                    >
                      Accept Only Higher Odds
                    </button>
                    <button
                      onClick={() =>
                        console.log("No Odds Changes Accepted Clicked")
                      }
                      className="text-gray-700 p-2 block text-sm  hover:bg-[#B1BAD3] w-full"
                    >
                      No Odds Changes Accepted
                    </button>

                    {/* {/ Tooltip Arrow /} */}
                    <div className="tooltip-arrow w-2 h-3 left-32 bg-white rotate-45 absolute top-[-5px] transform -translate-x-1/2"></div>
                  </div>
                </div>
              )}

              {/* {/ Empty Bet Slip Message /} */}
              <div className="flex justify-center min-h-96 items-center">
                <div>
                  <div className="flex justify-center">
                    <img src={sportsTable} alt="Sports" />
                  </div>
                  <p className="text-xs">Bet Slip Is Empty.</p>
                  <p className="text-xs">Start Betting Now!</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[4.2rem] right-0 w-full bg-[#213743]">
              {gameMenu === "Single" ? (
                <div className="bg-[#213743] p-4 space-y-2 ">
                  {/* {/ Total Stake Section /} */}
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-white">Total Stake</p>
                    <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                  </div>

                  {/* {/ Est. Payout Section /} */}
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-white">Est. Payout</p>
                    <p className="text-xs text-white font-medium">{`0.00000000 ₹`}</p>
                  </div>

                  {/* {/ Place Single Button /} */}
                  <div className="text-center">
                    <button className="text-white bg-sky-600 text-sm p-2 w-full rounded font-medium">
                      Place Single Button
                    </button>
                  </div>
                </div>
              ) : gameMenu === "Multi" ? (
                <div>
                  <div className="w-full flex flex-col mt-4">
                    {/* <FormControl sx={{ width: "100%" }}> */}
                    <div
                      className="mx-2 border-2 flex justify-between items-center border-[#2F4553] hover:border-[#557086] p-2 bg-[#0f212e] rounded text-white"
                      style={
                        {
                          // display: "flex",
                          // alignItems: "center",
                          // // gap: "8px",
                        }
                      }
                    >
                      <TextField
                        className="flex-grow bg-transparent text-white [&_input]:text-white [&_.MuiOutlinedInput-root]:h-[22px] [&_.MuiOutlinedInput-root_fieldset]:border-none"
                        type="number"
                        value={amount}
                        onChange={(e) => handleAmountChange(e.target.value)}
                        InputProps={{
                          inputProps: { min: 0 },
                        }}
                        // sx={{
                        //   flexGrow: 1,
                        //   backgroundColor: "transparent",
                        //   input: { color: "white" },
                        //   "& .MuiOutlinedInput-root": {
                        //     height: "25px",
                        //     "& fieldset": { border: "none" },
                        //   },
                        // }}
                      />
                      {/* <PiCurrencyBtcFill color="#FFD700" /> */}₹
                    </div>
                    {/* </FormControl> */}
                  </div>

                  {/* {/ Total Stake and Est. Payout for Multi /} */}
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

export default Betslip;
