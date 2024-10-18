import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import DragonSidebar from "./DragonSidebar";
import DragonContent from "./DragonContent";
import { DragonTowerSocket } from "../../../../socket";

function DragonTowerGame() {
  useEffect(() => {
    DragonTowerSocket.connect();

    DragonTowerSocket.on("connect", () => {
      console.log("Dragon Tower sokect connected");
    });

    DragonTowerSocket.on("disconnect", () => {
      console.log("Dragon Tower Disconnected from server");
    });

    return () => {
      DragonTowerSocket.off("connect");
      DragonTowerSocket.off("disconnect");
      DragonTowerSocket.disconnect();
    };
  });

  return (
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full">
      <div>
        <div className="text-white flex w-full min-w-80 h-[39rem] border-b-3">
          <div className="bg-[#213743]">
            <DragonSidebar />
          </div>
          <div>
            <DragonContent />
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

export default DragonTowerGame;
