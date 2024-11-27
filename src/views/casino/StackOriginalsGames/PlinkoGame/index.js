import React, { useEffect, useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { PlinkoSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";

function PlinkoGame() {
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
    PlinkoSocket.connect();

    PlinkoSocket.on("connect", () => {
      console.log("Plinko socket connected");
    });

    PlinkoSocket.on("disconnect", () => {
      console.log("Plinko disconnected from server");
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
    <div>
    <div className="mt-10 bg-[#1a2c38] flex justify-center items-center text-white w-full h-full">
      <div className="w-full max-w-screen-lg">
        <div
          className={`flex w-full min-w-72  ${
            isMobile ? "h-[24rem]" : "h-[39rem]"
          } border-b-3`}
        >
          {!isMobile && (
            <div className="flex-row bg-[#213743]">
              <PlinkoGameSidebar />
            </div>
          )}
          <div className="flex-grow">
            <PlinkoGameContent />
          </div>
        </div>

        {isMobile && (
          <div className="flex flex-col">
            <PlinkoGameSidebar />
          </div>
        )}
        <div
          className={`
             ${isMobile ? "h-[5rem] md:ml-40 md:w-[24.3rem] ml-2 max-[425px]:w-[25.4rem] max-[375px]:w-[22.26rem] max-[414px]:w-[24.71rem] max-[390px]:w-[23.2rem] max-[430px]:w-[25.7rem] max-[360px]:w-[21.3rem] max-[400px]:w-[23.79rem]" : "h-24"}
          border-t-2 border-[#213743] h-20`}
        >
          <hr className="border-2 border-[#213743]" />
          <GameFooter />
        </div>
        <div className="mt-5">
        <GameContent />
        <GameTable />
      </div>
      </div>
    </div>
    </div>
  );
}

export default PlinkoGame;
