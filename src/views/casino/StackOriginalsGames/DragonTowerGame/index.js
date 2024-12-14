import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import DragonSidebar from "./DragonSidebar";
import DragonContent from "./DragonContent";
import { DragonTowerSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";

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
  <div className=" xl:py-10 lg:py-8 md:py-4 py-5 bg-[#1a2c38] px-14 flex justify-center items-center text-white h-full">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full ${
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
          isMobile ? "-ml-12 w-[25.3rem] -mt-12 md:w-[29.3rem] md:-mt-12 md:ml-16 max-[375px]:w-[22.23rem] max-[414px]:w-[24.7rem] max-[390px]:w-[23.2rem] max-[400px]:w-[23.55rem]" : "xl:w-[64rem] lg:w-[53.3rem]"
        } border-t-2 border-[#213743] h-10`}
      >
        <hr className="border-2 border-[#213743]" />
        <GameFooter />
      </div>
      <div className="xl:w-[80rem] px-4 md:px-7 max-w-screen-md mx-auto mt-14">
        <GameContent />
        <GameTable />
      </div>
    </div>
  </div>
  );
}

export default DragonTowerGame;
