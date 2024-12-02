import React, { useState } from "react";
import Loader from "../Loader";
import MyBets from "./MyBets";
import AllBets from "./AllBets";

export default function GameTable() {
  const [commissionData, setCommissionData] = useState([]);
  const [gameMenu, setGameMenu] = useState("My Bets");
  const [loading, setLoading] = useState(false);

  const menuItems = [
    {
      label: "My Bets",
    },
    {
      label: "All Bets",
    },
    // {
    //   label: "High Rollers"
    // },
    // {
    //   label: "Rece Leaderboard",
    // },
  ];

  return (
    <div className="bg-[#1a2c38] h-full flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col flex-1 bg-[#1a2c38]">
          <div className="flex flex-col flex-1 justify-center">
            <div className="flex-1 flex flex-col">
              <div className="flex">
                <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0 w-full">
                  <div className="bg-[#0f212e] flex rounded-full p-[4px] flex-shrink-0 space-x-1 font-bold w-full">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        className={`py-2 lg:px-5 sm:px-4 md:px-4 rounded-full flex justify-center items-center text-sm ${
                          gameMenu === item.label
                            ? "bg-[#4d718768]"
                            : "hover:bg-[#4d718768]"
                        }`}
                        onClick={() => setGameMenu(item.label)}
                      >
                        {item.icon}
                        <p className="text-white">{item.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {gameMenu === "My Bets" ? (
                <MyBets
                  setLoading={setLoading}
                  commissionData={commissionData}
                  setCommissionData={setCommissionData}
                />
              ) : (
                <AllBets />
              )}
              {/* {gameMenu === "Big Wins" ? (
                <BigWins
                  setLoading={setLoading}
                  commissionData={commissionData}
                  setCommissionData={setCommissionData}
                />
              ) : gameMenu === "Lucky Wins" ? (
                <LuckyWins commissionData={commissionData} />
              ) : gameMenu === "Challenges" ? (
                <Challenges commissionData={commissionData} />
              ) : (
                <Discription />
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
