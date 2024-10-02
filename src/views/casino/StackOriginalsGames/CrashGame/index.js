import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import CrashGameContent from "./CrashGameContent";
import CrashGameSidebar from "./CrashGameSidebar";
import { CrashSocket } from "../../../../socket";

function CrashGame() {
  useEffect(() => {
    CrashSocket.connect();

    CrashSocket.on("connect", () => {
      console.log("Crash sokect connected");
    });

    CrashSocket.on("disconnect", () => {
      console.log("Crash Disconnected from server");
    });

    CrashSocket.on("connect_error", (error) => {
      console.error("Crash Connection Error:", error);
    });

    return () => {
      CrashSocket.off("message");
      CrashSocket.off("connect");
      CrashSocket.off("disconnect");
      CrashSocket.off("connect_error");
      CrashSocket.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#1a2c38] py-8 text-white flex justify-center items-center w-full">
      <div>
        <div className="flex-row bg-center text-white flex grow w-full min-w-[30rem] h-[41.6rem] border-b-3">
          <CrashGameSidebar />
          <CrashGameContent />
        </div>
        <div>
          <hr className="border-2 border-[#213743]"></hr>
          <GameFooter />
        </div>
      </div>
    </div>
  );
}

export default CrashGame;
