import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import DragonSidebar from "./DragonSidebar";
import DragonContent from "./DragonContent";
import { DragonTowerSocket } from "../../../../socket";

function DragonTowerGame() {
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
  <div className="bg-[#1a2c38] px-14 py-8 flex justify-center items-center text-white h-full ">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full min-w-70  ${
          isMobile ? "h-[25rem]" : "h-[46rem]"
        } border-b-3`}
      >
        {!isMobile && (
          <div className="flex-row bg-[#213743]">
            <DragonSidebar/>
          </div>
        )}
        <div className="flex-grow">
          <DragonContent/>
        </div>
      </div>

      {isMobile && (
        <div className="flex flex-col">
          <DragonSidebar/>
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

export default DragonTowerGame;
