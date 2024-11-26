import React, {useState } from "react";
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
<<<<<<< HEAD
    <div className="bg-[#1a2c38] h-screen flex flex-col md:-mx-56">
=======
    <div className=" bg-[#1a2c38] mt-10 text-white flex w-full rounded-xl ">
    <div className="flex flex-col">
>>>>>>> 92c0eabfdce6e3ecd80db7f302ec8373c5b95c05
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col flex-1 bg-[#1a2c38]">
          <div className="flex flex-col flex-1 justify-center">
            <div className="flex-1 flex flex-col">
              <div className="flex">
                <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0">
                  <div className="bg-[#0f212e] flex rounded-full p-[4px] flex-shrink-0 space-x-1 font-bold">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${
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
  </div>
  );
}
