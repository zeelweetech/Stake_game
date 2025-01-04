import React, { useState } from "react";
import Loader from "../Loader";
import BigWins from "./BigWins";
import Discription from "./Discription";

const GameContent = () => {
  const [commissionData, setCommissionData] = useState([]);
  const [gameMenu, setGameMenu] = useState("Big Wins");
  const [loading, setLoading] = useState(false);

  const menuItems = [
    {
      label: "Big Wins",
    },
    // {
    //   label: "Lucky Wins",
    // },
    // {
    //   label: "Challenges",
    // },
    {
      label: "Discription",
    },
  ];
  return (
    <>
      <div className="bg-[#0f212e] p-6 text-white w-full rounded-xl">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0">
              <div className="bg-[#1a2c38] flex rounded-full p-[4px] flex-shrink-0 space-x-1 font-bold">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    className={`py-2 px-5 rounded-full flex justify-center items-center text-sm ${
                      gameMenu === item.label
                        ? "bg-[#4d718768] px-5"
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

            {gameMenu === "Big Wins" ? (
              <BigWins
                setLoading={setLoading}
                commissionData={commissionData}
                setCommissionData={setCommissionData}
              />
            ) : (
              <Discription />
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
    </>
  );
};

export default GameContent;
