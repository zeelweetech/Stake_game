import React, { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import Setting from "./Setting";
import LiveStats from "./LiveStats";
import Fairness from "./Fairness";
// import stackCarshLogo from "../../assets/svg/stackCarshLogo.svg";
import { Link } from "react-router-dom";

function GameFooter() {
  const [showSettings, setShowSettings] = useState(false);
  const [showLiveStats, setShowLiveStats] = useState(false);
  const [ShowFairness, setShowFairness] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const handleLiveStatsClick = () => {
    setShowLiveStats(true);
  };

  const closeLiveStats = () => {
    setShowLiveStats(false);
  };

  const handleFairness = () => {
    setShowFairness(true);
  };

  const closeFairness = () => {
    setShowLiveStats(false);
  };

  return (
    <div className="p-2 bg-[#0f212e] rounded-b-xl z-10 relative xl:w-[72rem] lg:w-[57.8rem] md:w-[24rem] md:px-0 px-3 w-full  ">
      <div className="flex justify-between items-center px-2">
        <div className="space-x-9 text-[#b1bad3] relative">
          <div className="flex items-center  relative">
            <div>
              <div className="group relative flex items-center py-[0.8125rem] px-[1rem] ">
                <SettingsIcon
                  fontSize="small"
                  className="text-[#b1bad3] cursor-pointer"
                  onClick={handleSettingsClick}
                />
                <div className="absolute z-10 left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8  bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                  Game Settings
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              {showSettings && <Setting onClose={closeSettings} />}
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
            <div>
              <div className="group relative flex items-center py-[0.8125rem] px-[1rem]">
                <LegendToggleIcon
                  fontSize="small"
                  className="text-[#b1bad3] cursor-pointer "
                  onClick={handleLiveStatsClick}
                />
                <div className="absolute left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                  Open Live Stats
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                </div>
                {/* <div className="absolute left-1/2 w-32 h-10 -mt-8 transform -translate-x-1/2 -translate-y-8 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
                  Close Live Stats
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                </div> */}
              </div>
              {showLiveStats && <LiveStats onClose={closeLiveStats} />}
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
            <ol className="relative border-s h-10 border-[#2f4553]"></ol>
          </div>
        </div>
        <div>
          <span className="text-[#b1bad3]/50 text-4xl font-extrabold italic font-sans hidden md:block w-16 sm:w-24 md:w-28">
            Listor
          </span>
        </div>
        <div>
          <Link
            className="text-[#b1bad3] hover:text-white"
            onClick={handleFairness}
          >
            Fairness
          </Link>
          {ShowFairness && <Fairness setShowFairness={setShowFairness} />}
        </div>
      </div>
    </div>
  );
}

export default GameFooter;
