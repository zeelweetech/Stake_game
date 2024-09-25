import React, { useEffect, useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { PlinkoSocket } from "../../../../socket";

function PlinkoGame() {
  useEffect(() => {
    PlinkoSocket.connect();

    PlinkoSocket.on("connect", () => {
      console.log("Plinko sokect connected");
    });

    PlinkoSocket.on("disconnect", () => {
      console.log("Plinko Disconnected from server");
    });

    PlinkoSocket.on("connect_error", (error) => {
      console.error("Plinko Connection Error:", error);
    });

    return () => {
      PlinkoSocket.off("message");
      PlinkoSocket.off("connect");
      PlinkoSocket.off("disconnect");
      PlinkoSocket.off("connect_error");
      PlinkoSocket.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full">
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
