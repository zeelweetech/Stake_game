import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import WheelGameContent from "./WheelGameContent";
import WheelGameSidebar from "./WheelGameSidebar";
import { WheelSocket } from "../../../../socket";

function WheelGame() {
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
    <div className="py-10 xl:px-40 lg:w-11/12 lg:ml-9 bg-[#1a2c38] flex justify-center items-center text-white h-full ">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full min-w-72  ${
          isMobile ? "h-[24rem]" : "h-[46rem]"
        } border-b-3`}
      >
        {!isMobile && (
          <div className="flex-row bg-[#213743]">
            <WheelGameSidebar/>
          </div>
        )}
        <div className="flex-grow">
          <WheelGameContent/>
        </div>
      </div>

      {isMobile && (
        <div className="flex flex-col">
          <WheelGameSidebar/>
        </div>
      )}
      <div
        className={`${
          isMobile ? "h-[15rem] w-auto ml-3 md:ml-32 md:w-[28.3rem]" : "h-[15rem] xl:w-[64rem]"
        } border-t-2 border-[#213743] `}
      >
        <hr className="border-2 border-[#213743]" />
        <GameFooter />
      </div>
    </div>
  </div>
  );
}

export default WheelGame;
