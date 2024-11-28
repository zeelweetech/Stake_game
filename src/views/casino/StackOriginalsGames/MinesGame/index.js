import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import MinesGameSidebar from "./MinesGameSidebar";
import MinesGameContent from "./MinesGameContent";
import { MineSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";

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

    <div className="py-10 xl:ml-0 lg:w-11/12 lg:ml-9 bg-[#1a2c38] flex justify-center items-center text-white h-full ">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full min-w-72  ${
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
          isMobile ? " md:ml-32 md:w-[28rem] ml-2 max-[425px]:w-[25.4rem] max-[375px]:w-[22.23rem] max-[414px]:w-[24.7rem] max-[390px]:w-[23.2rem] max-[430px]:w-[25.7rem] max-[360px]:w-[21.3rem]" : "xl:w-[72rem] lg:w-[55rem] "
        } border-t-2 border-[#213743] h-28`}
      > 
        <hr className="border-1 border-[#213743] " />
        <GameFooter />
      </div>
      <div>
        <GameContent />
        <GameTable />
      </div>
    </div>
  </div>
  );
}

export default MinesGame;