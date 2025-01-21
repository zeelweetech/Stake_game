import { useState } from "react";
import Loader from "../../component/Loader";
// import { BiSolidNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DialogContent } from "@mui/material";
import MyBets from "../../component/GameTable/MyBets";
import Sports from "./Sports";
import AllBets from "../../component/GameTable/AllBets";
import { useSelector } from "react-redux";
import { ReactComponent as BetSlip } from "../../../assets/svg/BetSlip.svg";

function MyBet() {
  const [loading, setLoading] = useState(false);
  const [gameMenu, setGameMenu] = useState("Casino");
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { openMenubar } = useSelector((state) => state.auth);
  const [isGameMenu, setIsGameMenu] = useState("AllBets");

  const menuItems = [{ label: "Casino" }, { label: "Sports" }];
  const subMenuItems = [
    { label: "AllBets" },
    { label: "High Rollers" },
    { label: "Race Leaderboard" },
  ];

  return (
    <div className="flex justify-center h-full bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white font-bold pt-6 w-full mx-auto lg:w-[70%] xl:w-[90%] md:w-[80%]">
          <div className="flex items-center space-x-1 px-4 md:px-24">
            <BetSlip className="w-4 h-4" />
            <Link to="#" className="text-lg font-medium text-white">
              My Bets
            </Link>
          </div>

          {/* Main Menu Section */}
          <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
            <div className="flex flex-col justify-center px-4 md:px-16 h-full bg-[#1a2c38]">
              <div className="flex justify-start w-full mb-4">
                <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      className={`py-2.5 px-4 rounded-full flex justify-start items-center text-sm 
                        ${
                          gameMenu === item.label
                            ? "bg-[#4d718768]"
                            : "hover:bg-[#4d718768]"
                        }`}
                      onClick={() => setGameMenu(item.label)}
                    >
                      <p className="text-white">{item.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`mx-auto lg:w-[70%] xl:w-[90%] md:w-[80%]`}>
                {gameMenu === "Casino" ? <MyBets /> : <Sports />}
              </div>
            </div>
          </DialogContent>

          {/* Sub Menu Section */}
          <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
            <div className="flex flex-col justify-start px-4 md:px-16 h-full bg-[#1a2c38]">
              <div className="flex justify-start w-full mb-4">
                <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                  {subMenuItems.map((item) => (
                    <button
                      key={item.label}
                      className={`py-2.5 px-4 rounded-full flex justify-start items-center text-sm 
                        ${
                          isGameMenu === item.label
                            ? "bg-[#4d718768]"
                            : "hover:bg-[#4d718768]"
                        }`}
                      onClick={() => setIsGameMenu(item.label)}
                    >
                      <p className="text-white">{item.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`mx-auto lg:w-[70%] xl:w-[90%] md:w-[80%]`}>
                {isGameMenu === "AllBets" ? (
                  <AllBets />
                ) : isGameMenu === "High Rollers" ? (
                  <p className="text-center">High Rollers content goes here.</p>
                ) : isGameMenu === "Race Leaderboard" ? (
                  <p className="text-center">
                    Race Leaderboard content goes here.
                  </p>
                ) : null}
              </div>
            </div>
          </DialogContent>
        </div>
      )}
    </div>
  );
}

export default MyBet;
