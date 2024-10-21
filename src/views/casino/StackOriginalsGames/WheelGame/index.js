import React, { useEffect } from "react";
import GameFooter from "../../../component/GameFooter";
import WheelGameContent from "./WheelGameContent";
import WheelGameSidebar from "./WheelGameSidebar";
import { WheelSocket } from "../../../../socket";

function WheelGame() {
  useEffect(() => {
    WheelSocket.connect();

    WheelSocket.on("connect", () => {
      console.log("wheel sokect connected");
    });

    WheelSocket.on("disconnect", () => {
      console.log("wheel Disconnected from server");
    });

    return () => {
      WheelSocket.off("connect");
      WheelSocket.off("disconnect");
      WheelSocket.disconnect();
    };
  });

  return (
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full">
      <div>
        <div className="text-white flex w-full min-w-80 h-[45rem] border-b-3">
          <div className="bg-[#213743]">
            <WheelGameSidebar />
          </div>
          <div>
            <WheelGameContent />
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

export default WheelGame;
