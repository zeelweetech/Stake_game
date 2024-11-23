import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function GameTable() {
  const [commissionData, setCommissionData] = useState([]);
  const [gameMenu, setGameMenu] = useState("My Games");
  const [loading, setLoading] = useState(false);

//   const menuItems = [
//     {
//       label: "Casino Bets",
//     },
//     {
//       label: "Sports Bets",
//     },
//     {
//       label: "Rece Leaderboard",
//     },
//   ];
const menuItems = [
    {
      label: "My Games",
    },
    {
      label: "All Games",
    },
    {
      label: "High Rollers"
    },
    {
      label: "Rece Leaderboard",
    },
  ];

  return (
    <div className="bg-[#1a2c38] h-screen flex flex-col">
      {loading ? (
        <Loader/>
      ) : (
        <div className="flex flex-col flex-1 bg-[#1a2c38]">
          <div className="flex flex-col flex-1 justify-center pt-12">
            <div className="flex-1 flex flex-col xl:w-[74.24%] lg:w-[75.5%]">
              <div className="flex">
                <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0">
                  <div className="bg-[#0f212e] flex rounded-full p-[5px] flex-shrink-0  space-x-2 text-xs">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        className={`py-2 lg:px-10 rounded-full flex justify-center space-x-1 items-center text-sm ${
                          gameMenu === item.label
                            ? "bg-[#4d718768]"
                            : "hover:bg-[#4d718768]"
                        }`}
                        onClick={() => setGameMenu(item.label)}
                      >
                        {item.icon}
                        <p className="text-[#b1bad3]">{item.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* {gameMenu === "Information" ? (
                <GameInformation
                  setLoading={setLoading}
                  commissionData={commissionData}
                  setCommissionData={setCommissionData}
                />
              ) : gameMenu === "Details" ? (
                <GameDetails commissionData={commissionData} />
              ) : (
                <GameCommissions />
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
