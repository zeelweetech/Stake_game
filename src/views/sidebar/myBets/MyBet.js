import { useState, useEffect } from "react";
import Loader from "../../component/Loader";
// import { BiSolidNotepad } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { DialogContent } from "@mui/material";
import MyBets from "../../component/GameTable/MyBets";
import Sports from "./Sports";
import AllBets from "../../component/GameTable/AllBets";
import { useSelector } from "react-redux";
import { ReactComponent as BetSlip } from "../../../assets/svg/BetSlip.svg";

function MyBet() {
  const [loading] = useState(false);
  const [gameMenu, setGameMenu] = useState("Casino");
  const [isGameMenu, setIsGameMenu] = useState("AllBets");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { openMenubar } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getContainerClass = () => {
    if (windowWidth <= 768) {
      return isChatOpen || isBetslipOpen ? "w-[90%]" : "w-full";
    }
    return openMenubar
      ? "lg:w-[70%] xl:w-[85%] md:w-[80%]"
      : "lg:w-[80%] xl:w-[90%] md:w-[85%]";
  };

  const menuItems = [{ label: "Casino" }, { label: "Sports" }];

  const subMenuItems = [
    { label: "AllBets" },
    { label: "High Rollers" },
    { label: "Race Leaderboard" },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-[#1a2c38]">
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader />
        </div>
      ) : (
        <div
          className={`text-white font-bold pt-6 ${getContainerClass()} mx-auto px-4`}
        >
          {/* Header */}
          <div className="flex items-center space-x-2 mb-6">
            <BetSlip className="w-5 h-5 text-[#b1bad3]" />
            <h1 className="text-xl font-medium text-white">My Bets</h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Main Menu Section */}
            <div className="bg-[#1a2c38] rounded-lg">
              <div className="flex flex-col space-y-4">
                {/* Game Type Menu */}
                <div className="overflow-x-auto">
                  <div className="bg-[#0f212e] inline-flex rounded-full p-1 space-x-4 min-w-max">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        className={`py-2 px-4 rounded-full text-sm transition-colors
                          ${
                            gameMenu === item.label
                              ? "bg-[#4d718768] text-white"
                              : "text-[#b1bad3] hover:bg-[#4d718768] hover:text-white"
                          }`}
                        onClick={() => setGameMenu(item.label)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Game Content */}
                <div className="">
                  {gameMenu === "Casino" ? <MyBets /> : <Sports />}
                </div>
              </div>
            </div>

            {/* Sub Menu Section */}
            <div className="bg-[#1a2c38] rounded-lg">
              <div className="flex flex-col space-y-4">
                {/* Sub Menu */}
                <div className="overflow-x-auto scrollbar-thin">
                  <div className="bg-[#0f212e] inline-flex rounded-full p-1 space-x-4 min-w-max">
                    {subMenuItems.map((item) => (
                      <button
                        key={item.label}
                        className={`py-2 px-2 rounded-full text-sm transition-colors
                          ${
                            isGameMenu === item.label
                              ? "bg-[#4d718768] text-white"
                              : "text-[#b1bad3] hover:bg-[#4d718768] hover:text-white"
                          }`}
                        onClick={() => setIsGameMenu(item.label)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub Menu Content */}
                <div className="w-full">
                  {isGameMenu === "AllBets" ? (
                    <AllBets />
                  ) : isGameMenu === "High Rollers" ? (
                    <div className="text-center p-8 bg-[#213743] rounded-lg">
                      <p className="text-lg">High Rollers</p>
                      <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-[#213743] rounded-lg">
                      <p className="text-lg">Race Leaderboard</p>
                      <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBet;
