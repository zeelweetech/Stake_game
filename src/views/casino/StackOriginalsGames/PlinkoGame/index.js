import React, { useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { useSelector } from "react-redux";

function PlinkoGame() {
    const values = useSelector((state) => state.plinkoGame.values);
    console.log("values", values);

  return (
    <div className="bg-[#1a2c38] py-12 text-white flex justify-center items-center w-full">
      <div>
        <div className="flex-row bg-center text-white flex grow w-full min-w-80 h-[41.6rem] border-b-3">
          <div className="bg-[#213743]">
            <PlinkoGameSidebar />
          </div>
          <div>
            <PlinkoGameContent />
          </div>
        </div>
        <div>
          <hr className="border-2 border-[#213743]"></hr>
          <GameFooter />
        </div>
      </div>
    </div>
  );
}

export default PlinkoGame;
