import React, { useEffect } from "react";
import LimboGameContent from "./LimboGameContent";
import GameFooter from "../../../component/GameFooter";
import LimboGameSidebar from "./LimboGameSidebar";
import { LimboSocket } from "../../../../socket";

function LimboGame() {
  useEffect(() => {
    LimboSocket.connect();

    LimboSocket.on("connect", () => {
      console.log("Limbo sokect connected");
    });

    LimboSocket.on("disconnect", () => {
      console.log("Limbo Disconnected from server");
    });

    LimboSocket.on("connect_error", (error) => {
      console.error("Limbo Connection Error:", error);
    });

    return () => {
      LimboSocket.off("message");
      LimboSocket.off("connect");
      LimboSocket.off("disconnect");
      LimboSocket.off("connect_error");
      LimboSocket.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full">
      <div>
        <div className="text-white flex w-full min-w-80 h-[39rem] border-b-3">
          <div className="bg-[#213743]">
            <LimboGameSidebar />
          </div>
          <div>
            <LimboGameContent />
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

export default LimboGame;
