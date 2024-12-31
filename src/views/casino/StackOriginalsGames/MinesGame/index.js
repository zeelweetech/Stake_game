import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
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
    <div className="flex justify-center ">
      <div className="md:py-10 py-3 bg-[#1a2c38] flex justify-center items-center text-white h-full md:max-w-96 max-w-full ">
        <div className="w-full">
          <div
            className={`flex justify-center w-full   ${
              isMobile ? "h-[24rem]" : "h-[39rem]"
            } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743]">
                <MinesGameSidebar />
              </div>
            )}
            <div className="flex-grow">
              <MinesGameContent />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <MinesGameSidebar />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-2 xl:-ml-[24rem] lg:-ml-[16.9rem]">
              <hr className="border-[#213743]" />
              <GameFooter />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <div className="xl:w-[72rem] lg:w-[58rem] md:w-[42rem] mx-0 md:px-0 px-3 w-full">
              <GameContent />
              <GameTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinesGame;
