import React, { useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { useSelector } from "react-redux";

function PlinkoGame() {
  return (
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full h-screen">
      <div>
        <div className="text-white flex w-full min-w-80 h-[39rem] border-b-3">
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
