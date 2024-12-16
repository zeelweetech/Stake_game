import React, { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import stackCarshLogo from "../../assets/svg/stackCarshLogo.svg";
import { Link } from "react-router-dom";

function GameFooter() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLiveStatsOpen, setIsLiveStatsOpen] = useState(false);
  const [isFairnessOpen, setisFairnessOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameInfoOpen, setISGameInfoOpen] = useState(false);
  const [isHotkeysVisible, setIsHotkeysVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [isRotated, setIsRotated] = useState(false);
  const [activeButton, setActiveButton] = useState("seeds");
  const [selectedGame, setSelectedGame] = useState("");
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      id: 1,
      label: "Instant Bet",
      iconPath: "M31.986 0v23.28H52.12L31.986 64V37.814H11.88L31.986 0Z",
    },
    {
      id: 2,
      label: "Animations",
      iconPath:
        "M29.176 20.932c-1.778 3.154-2.824 6.922-2.824 10.936s1.048 7.784 2.882 11.05l-.058-.114c-.844.23-1.816.366-2.818.376h-.006c-6.238 0-11.294-5.056-11.294-11.294s5.056-11.294 11.294-11.294h.04c.988 0 1.948.124 2.864.356l-.08-.018v.002ZM9.036 24.47c-.958 2.182-1.514 4.724-1.514 7.398 0 2.674.558 5.216 1.562 7.518l-.048-.122a10.297 10.297 0 0 1-1.54-.002l.034.002a7.53 7.53 0 0 1 0-15.06c.566.056 1.078.15 1.576.28l-.07-.016v.002Zm39.906 22.588c-8.316 0-15.058-6.742-15.058-15.058 0-8.316 6.742-15.058 15.058-15.058C57.258 16.942 64 23.684 64 32c-.064 8.216-6.696 14.862-14.9 14.946h-.008l-.15.112Z",
    },
  ];

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleLiveStats = () => {
    setIsLiveStatsOpen(!isLiveStatsOpen);
  };

  const toggleFairness = () => {
    setisFairnessOpen(!isFairnessOpen);
  };

  const handleFairnessClose = () => {
    setisFairnessOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenGameInfo = () => {
    setISGameInfoOpen(true);
  };

  const handleCloseGameInfo = () => {
    setISGameInfoOpen(false);
  };

  const handleOpenHotkeys = () => {
    setIsHotkeysVisible(true);
  };

  const handleCloseHotkeys = () => {
    setIsHotkeysVisible(false);
  };

  const handleCloseLiveStats = () => {
    setIsLiveStatsOpen(false);
  };

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTooltipVisible(false);
  };

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const handleSeedClick = () => {
    setActiveButton("seeds"); // Set the active button to "seeds"
    console.log("Seeds button clicked");
    // Add your condition-based functionality here
  };

  const handleVerifyClick = () => {
    setActiveButton("verify"); // Set the active button to "verify"
    console.log("Verify button clicked");
    // Add your condition-based functionality here
  };

  return (
    <div className="p-2 w-full bg-[#0f212e] rounded-b-lg z-10 relative">
      <div className="flex justify-between items-center">
        <div className="space-x-9 text-[#b1bad3] relative">
          <div className="flex items-center  relative">
            <div className="group relative flex items-center py-[0.8125rem] px-[1rem] ">
              <SettingsIcon
                onClick={toggleSettings}
                fontSize="small"
                className="text-[#b1bad3] cursor-pointer"
              />
              <div className="absolute z-10 left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8  bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                Game Settings
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>

            {!isScreenSmall && (
              <div className="group relative flex items-center py-[0.8125rem] px-[1rem]  ">
                <CheckBoxOutlineBlankIcon
                  fontSize="small"
                  className="text-[#b1bad3] cursor-pointer"
                />
                <div className="absolute left-1/2 w-40 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                  Disable Theatre Mode
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            )}

            <div className="group relative flex items-center py-[0.8125rem] px-[1rem] ">
              <LegendToggleIcon
                onClick={toggleLiveStats}
                fontSize="small"
                className="text-[#b1bad3] cursor-pointer "
              />
              <div className="absolute left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                Open Live Stats
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="absolute left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                Close Live Stats
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>

            <div className="group relative flex items-center py-[0.8125rem] px-[1rem]  ">
              <StarOutlineIcon
                fontSize="small"
                className="text-[#b1bad3] cursor-pointer"
              />
              <div className="absolute left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                Favourite Game
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
            <ol className="relative border-s  h-10 border-[#2f4553]">
              <li>
                <a className="inline-flex"></a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <span className="text-[#b1bad3]/50 text-4xl font-extrabold italic font-sans hidden sm:block w-16 sm:w-24 md:w-28">
            Listor
          </span>
        </div>
        <div>
          <Link
            className="text-[#b1bad3] hover:text-white"
            onClick={toggleFairness}
          >
            Fairness
          </Link>
        </div>
      </div>
      {isSettingsOpen && (
        <div className="relative">
          <div className=" w-3 h-3 bg-white rotate-45 absolute bottom-[-11px] xl:left-[1.5rem] lg:left-[1.5rem] md:left-[1.5rem] left-[1.6rem] transform -translate-x-1/2"></div>
          <div className="absolute mt-1 z-10 xl:-left-10 lg:-left-5  md:-left-10 -left-[0.2rem] py-1 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 w-32 md:w-32 lg:w-32 ">
            <div className="px-2 py-2 flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path d="M0 20.8v22.4h16L35.2 56V8L16 20.8H0ZM41.6 9.6v8C49.552 17.6 56 24.048 56 32s-6.448 14.4-14.4 14.4v8C53.972 54.4 64 44.372 64 32 64 19.628 53.972 9.6 41.6 9.6ZM41.574 24a8 8 0 0 1 0 16V24Z" />
              </svg>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full focus:outline-none"
              />
            </div>

            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-center px-2 py-2 cursor-pointer ${
                    clickedIndex === index ? "" : "hover:bg-gray-400"
                  }`}
                  onClick={() =>
                    setClickedIndex(clickedIndex === index ? null : index)
                  }
                >
                  <svg
                    className={`w-4 h-4 ${
                      clickedIndex === index
                        ? "text-[#1475E1]"
                        : "text-[#2F4553]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 64 64"
                  >
                    <path d={item.iconPath} />
                  </svg>
                  <span
                    className={`ml-3 text-base font-semibold ${
                      clickedIndex === index
                        ? "text-[#1475E1]"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
              <li
                className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer  "
                onClick={handleOpenModal}
              >
                <svg
                  className="w-4 h-4 text-[#2F4553]"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M7.36 42.39c1-12.78 14.728-25.29 17.926-29.976 2.778-4.206 1.719-9.203.83-11.4a.78.78 0 0 1 .893-1h-.004c13.889 2.918 14.588 13.48 14.168 18.206-.42 4.726.42 7.913 3.478 7.224 3.057-.69 2.028-8.443 2.028-8.443s14.039 16.676 8.893 33.073c-2.588 8.574-9.033 12.19-14.449 13.89-.28.14-.56-.14-.56-.55.7-2.638 2.509-4.726 3.058-7.644 1.12-4.796-3.327-9.213-6.624-11.71-2.063-1.538-3.386-3.97-3.386-6.712 0-.127.002-.255.008-.381v.018c0-.28-.42-.42-.55-.28a90.106 90.106 0 0 1-6.652 7.202l-.022.022c-5.136 5.696-7.784 12.09-3.197 19.175.14.28-.14.69-.41.56C11.387 60.596 6.67 51.973 7.36 42.39Z" />
                </svg>
                <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
                  Max Bet
                </span>
              </li>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-[#1a2c38] text-white rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-xl p-4 relative">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold flex items-center">
                        <span className="mr-2">
                          <svg
                            className="w-4 h-4 text-[#b1bad3]"
                            fill="currentColor"
                            viewBox="0 0 64 64"
                          >
                            <path d="M57.89 0H6.11A6.12 6.12 0 0 0 0 6.11v51.78A6.12 6.12 0 0 0 6.11 64h51.78A6.12 6.12 0 0 0 64 57.89V6.11A6.12 6.12 0 0 0 57.89 0ZM25 50.09H11.13a2.79 2.79 0 0 1-.008-5.568H25a2.791 2.791 0 1 1 .166 5.574c-.058 0-.118-.002-.174-.006H25ZM23.65 25a8.346 8.346 0 0 1-7.842-5.502l-.018-.058h-4.66a2.791 2.791 0 0 1-.008-5.57h4.668c1.182-3.262 4.254-5.55 7.86-5.55a8.34 8.34 0 0 1 0 16.68Zm29.22 25.09h-4.66c-1.182 3.27-4.258 5.564-7.872 5.564a8.35 8.35 0 0 1-8.35-8.35 8.35 8.35 0 0 1 8.35-8.35 8.356 8.356 0 0 1 7.854 5.506l.018.058h4.66a2.79 2.79 0 0 1 .008 5.568h-.008v.004Zm0-30.61H39c-.05.004-.108.004-.166.004a2.791 2.791 0 0 1 0-5.58c.058 0 .118.002.174.006H39h13.87a2.79 2.79 0 0 1 .008 5.568h-.008v.002Z" />
                          </svg>
                        </span>
                        Max Bet
                      </h2>
                      <button
                        className="text-gray-400 hover:text-white"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      >
                        ✖
                      </button>
                    </div>

                    <p className="text-sm text-gray-300 mb-6">
                      Are you sure you want to enable the max bet button?
                    </p>

                    <div className="text-center">
                      <button
                        className="bg-[#00e701] hover:bg-[#1fff20] text-black font-semibold py-2 px-4 rounded focus:outline-none"
                        onClick={handleCloseModal}
                      >
                        Enable
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <li
                className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer"
                onClick={handleOpenGameInfo}
              >
                <svg
                  className="w-4 h-4 text-[#2F4553]"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
                </svg>
                <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
                  Game Info
                </span>
              </li>
              {isGameInfoOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-[#1a2c38] text-white rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-lg p-4 relative">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold flex items-center">
                        <span className="mr-2">
                          <svg
                            className="w-4 h-4 text-[#b1bad3]"
                            fill="currentColor"
                            viewBox="0 0 64 64"
                          >
                            <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
                          </svg>
                        </span>
                        Game Info
                      </h2>
                      <button
                        className="text-gray-400 hover:text-white w-5 h-5"
                        aria-label="Close"
                        onClick={handleCloseGameInfo}
                      >
                        ✖
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="bg-[#0f212e] flex rounded-full p-[5px] mt-3">
                        <button className="py-2.5 w-[5rem] rounded-full bg-[#4d718768] transition active:scale-[0.98] focus:outline-none">
                          Rules
                        </button>
                      </div>
                    </div>
                    <ul className="mt-4 text-base text-[#b1bad3] cursor-default list-decimal list-inside">
                      <li>
                        The more number combinations selected, the higher
                        potential payout.
                      </li>
                      <li>
                        The more selections that successfully hit, the higher
                        your payout multiplier.
                      </li>
                      <li>
                        Maximum possible selection and maximum possible
                        successful hits is 10.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <li
                className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer"
                onClick={handleOpenHotkeys}
              >
                <svg
                  className="w-4 h-4 text-[#2F4553]"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M61.14 10.668H2.852A2.85 2.85 0 0 0 0 13.518v37.146a2.667 2.667 0 0 0 2.668 2.668h58.664A2.667 2.667 0 0 0 64 50.665V13.519a2.85 2.85 0 0 0-2.852-2.851h-.008ZM35.086 17.81h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM22.715 17.811h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM10.367 17.811h6.188v5.332h-6.188V17.81Zm0 11.495h6.188v5.332h-6.188v-5.332Zm43.254 16.88H10.37v-5.332h43.25v5.331Zm0-11.496h-6.188v-5.36h6.188v5.36Zm0-11.463h-6.188v-5.332h6.188v5.332Z" />
                </svg>
                <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
                  Hotkeys
                </span>
              </li>
              {isHotkeysVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-[#1a2c38] text-white rounded-xl  w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-lg relative  overflow-y-auto max-h-[80vh]">
                    <div className="flex justify-between items-center p-4">
                      <h2 className="text-base font-semibold flex items-center">
                        <span className="mr-2">
                          <svg
                            className="w-4 h-4 text-[#b1bad3]"
                            fill="currentColor"
                            viewBox="0 0 96 96"
                          >
                            <path d="M56.8 47.08a49.761 49.761 0 0 0-5.6 22.8v5H32.32a55.56 55.56 0 0 1 5-22.76A86.916 86.916 0 0 1 50.8 31h-28V16.36H72v7.76a133.838 133.838 0 0 0-15.2 22.96Zm26.4 16.24a30.56 30.56 0 0 0-6 13.04l-.6 3L60 76.32a38.12 38.12 0 0 1 13.36-22.28l-12-2.36 5.04-10.64L96 46.88l-.92 4.64a85.487 85.487 0 0 0-11.88 11.8Zm-58.52 9.32a30.08 30.08 0 0 1 0-14.36 79.675 79.675 0 0 1 5.8-15.84l-1.12-4.6L0 44.88v11.68l12-2.84a37.88 37.88 0 0 0-2.88 25.92l16.28-4-.72-3Z" />
                          </svg>
                        </span>
                        Hotkeys
                      </h2>
                      <button
                        className="text-gray-400 hover:text-white w-5 h-5"
                        aria-label="Close"
                        onClick={handleCloseHotkeys}
                      >
                        ✖
                      </button>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="w-full text-[#d5dceb] font-semibold rounded-lg space-y-4">
                        <div className="space-y-3 p-4 ">
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Pick tile number 1 in current row</span>
                            <span className="bg-[#2F4553]  text-sm px-3.5 py-1.5 rounded">
                              1
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Pick tile number 2 in current row</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              2
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Pick tile number 3 in current row</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              3
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Pick tile number 4 in current row</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              4
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Make a bet</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              Space
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Double bet amount</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              s
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Halve bet amount</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              a
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Zero bet amount</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              d
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Pick Random Tile</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              q
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>Cashout</span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3 py-1.5 rounded">
                              w
                            </span>
                          </div>
                          <div className="flex justify-between text-[#b1bad3]">
                            <span>
                              Undo tile selection the current round (autobetting
                              only)
                            </span>
                            <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                              r
                            </span>
                          </div>
                          <div
                            className="border border-dashed p-4 border-[#b1bad3] bg-[#0F212E] rounded-md"
                            style={{ border: "2px dashed" }}
                          >
                            <p className="flex items-start space-x-2 text-sm text-[#b1bad3]">
                              <svg
                                className="h-4 w-4 text-[#b1bad3] flex-shrink-0"
                                viewBox="0 0 64 64"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0Zm5.24 51.68H26.76v-21h10.48v21ZM32 24.56a6.12 6.12 0 1 1 6.12-6.12v.04a6.08 6.08 0 0 1-6.08 6.08h-.042H32Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span>
                                When the hotkeys are enabled, they will remain
                                on for all games until disabled. Despite some
                                games sharing similar key binds, it's always
                                advised to confirm what key interactions are set
                                for each game.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-[#0F212E] h-16 space-y-2 flex justify-center items-center text-[#b1bad3] px-4 py-4 rounded">
                      <input
                        type="checkbox"
                        className="form-checkbox h-6 w-6 flex justify-center items-center mr-2 mt-2 "
                      />
                      <span className="font-semibold">Hotkeys Enabled</span>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
      {isLiveStatsOpen && (
        <div className="fixed inset-0 flex items-end justify-end  md:mr-44 mr-20 bg-scroll">
          <div className="bg-[#213743] text-white rounded-lg shadow-lg w-72 relative ">
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
                aria-label="Close"
                onClick={handleCloseLiveStats}
              >
                ✖
              </button>
            </div>
            <div className="flex justify-between items-start px-4 ">
              <div className="relative bg-[#0f212e] flex rounded-full p-[5px] mt-3 w-16 h-10">
                <button
                  onClick={toggleTooltip}
                  className="focus:outline-none flex items-center justify-center space-x-0.5"
                  aria-label="Toggle Tooltip"
                >
                  <span className="px-1">{selectedOption}</span>
                  <svg
                    onClick={handleClick}
                    className={`w-4 h-4 text-[#b1bad3] transition-transform duration-300 ${
                      isRotated ? "rotate-180" : ""
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
                      className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${
                        selectedOption === "All" ? "text-[#1475E1]" : ""
                      }`}
                    >
                      All
                    </div>
                    <div
                      onClick={() => handleOptionClick("Bets")}
                      className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${
                        selectedOption === "Bets" ? "text-[#1475E1]" : ""
                      }`}
                    >
                      Bets
                    </div>
                    <div
                      onClick={() => handleOptionClick("Race")}
                      className={`hover:bg-[#9ca3af] text-base font-semibold hover:text-black cursor-pointer ${
                        selectedOption === "Race" ? "text-[#1475E1]" : ""
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
            <div className="w-72 bg-[#213743] rounded-lg px-4 py-3 space-y-3">
              <div className="grid grid-cols-2 gap-2 bg-[#0f212e] p-4 rounded-lg">
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">
                    Profit
                  </p>
                  <p className="text-[#00E701] font-bold text-sm">
                    0.00000000 ₹
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">Wins</p>
                  <p className="text-[#00E701] font-bold text-base">0</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">
                    Wagered
                  </p>
                  <p className="font-bold text-sm">0.00000000 ₹</p>
                </div>
                <div>
                  <p className="text-base text-[#B1BAD3] font-semibold">
                    Losses
                  </p>
                  <p className="text-[#ED4163] font-bold text-base">0</p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center w-64 h-56 bg-[#0f212e] rounded-md p-4">
                <div className="flex items-center space-x-1">
                  <span className="text-[#00E701] text-base font-semibold">
                    0.00000000 ₹
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
          </div>
        </div>
      )}
      {isFairnessOpen && (
        <div className="flex justify-center items-center  bg-scroll z-10 absolute xl:ml-[22rem] xl:-mt-[37rem] lg:ml-[11rem] lg:-mt-[41rem] md:ml-[-3rem] md:-mt-[71rem]">
          <div className="bg-[#1a2c38]  text-white rounded-t-xl rounded-b-xl  shadow-lg w-[31.25rem] relative -">
            <div className="flex justify-between items-center p-4 h-16 rounded-t-lg">
              <h2 className="text-base font-semibold flex items-center gap-2 select-none">
                <span>
                  <svg
                    className="w-4 h-4 text-[#b1bad3]"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                  >
                    <path d="M54.727 15.006h3.12V8.37H34.654V2.61H27.99v5.758H4.746v6.637h4.505L0 37.452c0 7.037 5.704 12.741 12.741 12.741 7.038 0 12.741-5.704 12.741-12.741l-9.25-22.446h11.73v39.745h-9.303v6.638h25.165V54.75h-9.171V15.006h13.115l-9.25 22.446c0 7.037 5.703 12.741 12.74 12.741C58.297 50.193 64 44.489 64 37.452l-9.273-22.446ZM5.334 37.452l7.411-17.887 7.357 17.887H5.334Zm38.492 0 7.357-17.887 7.463 17.887h-14.82Z" />
                  </svg>
                </span>
                Fairness
              </h2>
              <button
                className="text-gray-400 hover:text-white w-4 h-4 p-4 flex justify-center items-center"
                aria-label="Close"
                onClick={handleFairnessClose}
              >
                ✖
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center h-[3.375rem]">
              <div className="flex space-x-[0.3125rem] bg-[#0f212e] p-[5px] h-[3.375rem] rounded-full text-sm">
                <button
                  onClick={() => setActiveButton("seeds")}
                  className={`py-[0.9375rem] px-[1.25rem] w-[4.9161rem] h-[2.75rem] rounded-full flex justify-center items-center font-semibold ${
                    activeButton === "seeds"
                      ? "text-white bg-[#2f4553]"
                      : "hover:bg-[#2f4553]"
                  }`}
                >
                  Seeds
                </button>
                <button
                  onClick={() => setActiveButton("verify")}
                  className={`py-[0.9375rem] px-[1.25rem] w-[4.749rem] h-[2.75rem] rounded-full flex justify-center items-center font-semibold ${
                    activeButton === "verify"
                      ? "text-white bg-[#2f4553]"
                      : "hover:bg-[#2f4553]"
                  }`}
                >
                  Verify
                </button>
              </div>
            </div>

            {/* Conditional Content */}
            {activeButton === "seeds" && (
              <div className="p-4 w-[31.25rem] h-[16.6rem]">
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                  <label>Active Client Seed</label>
                </div>
                <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                  <div className="relative flex">
                    <input
                      type="text"
                      value="5937139efe8bdf83"
                      disabled
                      className="w-[26.375rem] h-[2.5rem] p-[0.4375rem] rounded-l-md text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none"
                    />
                  </div>
                  <button className="py-[0.8125rem] px-[1rem] h-[2.5rem] w-[2.875rem] flex justify-center items-center text-sm font-bold hover:bg-[#5c849e68]">
                    <span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="w-4 h-4"
                      >
                        <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mb-4">
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                    <label>Active Server Seed (Hashed)</label>
                  </div>
                  <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                    <div className="relative flex">
                      <input
                        type="text"
                        value="5937139efe8bdf83"
                        disabled
                        className="w-[26.2rem] p-[0.4375rem] rounded-l-md text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none] "
                      />
                    </div>
                    <button className="py-[0.8125rem] px-[1rem] h-[2.5rem] w-[2.875rem] flex justify-center items-center text-sm font-bold hover:bg-[#5c849e68]">
                      <span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 64 64"
                          className="w-4 h-4"
                        >
                          <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-ss mt-3 mb-1  ">
                    <label>Total Bets Made With Pair</label>
                  </div>
                  <div className="relative flex rounded">
                    <input
                      type="number"
                      value="0"
                      disabled
                      className="w-[29.25rem] h-[2.4375rem] p-[0.4375rem] rounded-l-md text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none] "
                    />
                  </div>
                </div>
                <div className="bg-[#0f212E] p-4 w-[31.25rem] h-[13.3rem] -ml-4 -mt-3">
                  <h1 className="flex justify-center items-center font-semibold">
                    Rotate Seed Pair
                  </h1>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                    <label>Active Client Seed</label>
                  </div>

                  <div className="relative flex rounded">
                    <input
                      type="text"
                      className="w-[22.2842rem] h-[2.5rem] p-[0.4375rem] rounded-l-md text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none] "
                    />
                    <button className=" w-[7.0925rem] h-[2.5rem] bg-[#00E701] hover:bg-[#1fff20] rounded-r text-black py-[0.8125rem] px-[1rem] flex justify-center items-center font-semibold  ">
                      Change
                    </button>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                    <label>Next Server Seed (Hashed)</label>
                  </div>
                  <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                    <div className="relative flex">
                      <input
                        type="text"
                        value="5937139efe8bdf83"
                        disabled
                        className="w-[26.2rem] p-[0.4375rem] rounded-l-md text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none"
                      />
                    </div>
                    <button className="py-[0.8125rem] px-[1rem] h-[2.6rem] w-[3rem] flex justify-center items-center text-sm font-bold hover:bg-[#5c849e68]">
                      <span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 64 64"
                          className="w-4 h-4"
                        >
                          <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* {activeButton === "verify" && (
              <div>
                <div className="flex flex-col items-center bg-[#1a2c38] p-4 text-white w-full">
                  <div className="flex flex-col items-center p-4 justify-center w-[29.5rem] h-[12.5rem] rounded-md border-2 border-dotted border-[#2f4553]">
                    <p className="text-gray-400">
                      More inputs are required to verify result
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <span className="w-4 h-4 bg-gray-400 rounded-full transform transition-all duration-500 hover:scale-125"></span>
                      <span className="w-4 h-4 bg-gray-400 rounded-full transform transition-all duration-500 hover:scale-125"></span>
                    </div>
                  </div>
                </div>

                <div className="w-full  p-4 bg-[#0f212E]">
                  <label className="block mb-2 text-sm font-medium">Game</label>
                  <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm ">
                    <option value="mines">Mines</option>
                    <option value="crash">Crash</option>
                    <option value="keno">Keno</option>
                    <option value="dragontower">DragonTower</option>
                    <option value="plinko">Plinko</option>
                    <option value="limbo">Limbo</option>
                    <option value="wheel">Wheel</option>
                  </select>

                  <label className="block mt-2 mb-2 text-sm font-medium">
                    jdfli
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  />

                  <label className="block mt-2 mb-2 text-sm font-medium">
                    Server Seed
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  />

                  <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3]">
                    Nonce
                  </label>
                  <div className="flex rounded bg-[#2F4553]">
                    <input
                      className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                      type="number"
                    />
                    <button className="w-16 hover:bg-[#5c849e68]">
                      <KeyboardArrowDownIcon fontSize="small" />
                    </button>
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                    />
                    <button className="w-16 hover:bg-[#5c849e68]">
                      <KeyboardArrowUpIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </div>
            )} */}
            <div>
              {activeButton === "verify" && (
                <div>
                  <div className="flex flex-col items-center bg-[#1a2c38] p-4 text-white w-full">
                    <div className="flex flex-col items-center p-4 justify-center w-[29.5rem] h-[12.5rem] rounded-md border-2 border-dotted border-[#2f4553]">
                      <p className="text-gray-400 select-none">
                        More inputs are required to verify result
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <span className="w-4 h-4 bg-gray-400 rounded-full transform transition-all duration-500 hover:scale-125"></span>
                        <span className="w-4 h-4 bg-gray-400 rounded-full transform transition-all duration-500 hover:scale-125"></span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-[#0f212E] rounded-b-xl">
                    <label className="block mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                      Game
                    </label>
                    <select
                      className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                    >
                      <option value="mines">Mines</option>
                      <option value="crash">Crash</option>
                      <option value="keno">Keno</option>
                      <option value="dragontower">DragonTower</option>
                      <option value="plinko">Plinko</option>
                      <option value="limbo">Limbo</option>
                      <option value="wheel">Wheel</option>
                      <option value="slide">Slide</option>
                    </select>

                    {selectedGame === "crash" || selectedGame === "plinko" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                          />
                          <button className="w-16 hover:bg-[#5c849e68]">
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button className="w-16 hover:bg-[#5c849e68]">
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>

                        <label className="block mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Rish
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option selected></option>
                          <option >Low</option>
                          <option value="mediun">Mediun</option>
                          <option value="high">High</option>
                        </select>

                        <label className="block mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Rows
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option></option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                        </select>
                        {selectedGame === "crash" && (
                          <>
                            <label className="block mt-2 mb-2 text-sm text-[#B1BaD3] font-medium select-none">
                              Seed
                            </label>
                            <input
                              type="text"
                              className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                          />
                          <button className="w-16 hover:bg-[#5c849e68]">
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button className="w-16 hover:bg-[#5c849e68]">
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameFooter;
