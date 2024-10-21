import React, { useEffect, useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { PlinkoSocket } from "../../../../socket";

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
    <div className=" bg-[#1a2c38]  text-white flex justify-center items-center w-full h-full">
      <div className="w-full max-w-screen-lg">
        <div className={`flex  w-full min-w-80 h-[39rem] border-b-3`}>
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
        <div>
          <hr className="border-2 border-[#213743] " />
          <GameFooter />
        </div>
      </div>
    </div>
  );
}

export default PlinkoGame;

