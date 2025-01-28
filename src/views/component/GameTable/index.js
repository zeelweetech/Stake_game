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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col flex-1 bg-[#1a2c38]">
          <div className="flex overflow-y-hidden touch-scroll transform translate-z-0 scrollbar-thin">
            <div className="bg-[#0f212e] flex rounded-full flex-shrink-0 space-x-1 font-bold mt-5 mb-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className={`py-3 px-7 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label
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
          {/* </div> */}

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
      )}
    </div>
  );
}
