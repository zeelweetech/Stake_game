import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import MinesGameSidebar from "./MinesGameSidebar";
import MinesGameContent from "./MinesGameContent";
import { MineSocket } from "../../../../socket";

function MinesGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    MineSocket.connect();

    MineSocket.on("connect", () => {
      console.log("Mine sokect connected");
    });

    MineSocket.on("disconnect", () => {
      console.log("Mine Disconnected from server");
    });

    return () => {
      MineSocket.off("connect");
      MineSocket.off("disconnect");
      MineSocket.disconnect();
    };
  });

  return (

    <div className="mt-5 bg-[#1a2c38] flex justify-center items-center text-white w-full h-full">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full min-w-70  ${
          isMobile ? "h-[24rem]" : "h-[39rem]"
        } border-b-3`}
      >
        {!isMobile && (
          <div className="flex-row bg-[#213743]">
            <MinesGameSidebar/>
          </div>
        )}
        <div className="flex-grow">
          <MinesGameContent/>
        </div>
      </div>

      {isMobile && (
        <div className="flex flex-col">
          <MinesGameSidebar/>
        </div>
      )}
      <div
        className={`${
          isMobile ? "h-[12rem]" : "h-[15rem]"
        } border-t-2 border-[#213743]`}
      >
        <hr className="border-2 border-[#213743]" />
        <GameFooter />
      </div>
    </div>
  </div>
  );
}

export default MinesGame;



