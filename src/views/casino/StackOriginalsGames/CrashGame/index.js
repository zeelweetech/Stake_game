import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import CrashGameContent from "./CrashGameContent";
import CrashGameSidebar from "./CrashGameSidebar";
import { CrashSocket } from "../../../../socket";

function CrashGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    window.addEventListener("resize", handleResize);

    CrashSocket.connect();
    
    CrashSocket.on("connect", () => {
      console.log("Crash socket connected");
    });

    CrashSocket.on("disconnect", () => {
      console.log("Crash Disconnected from server");
    });

    CrashSocket.on("connect_error", (error) => {
      console.error("Crash Connection Error:", error);
    });

    return () => {
      CrashSocket.off("message");
      CrashSocket.off("connect");
      CrashSocket.off("disconnect");
      CrashSocket.off("connect_error");
      CrashSocket.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#1a2c38] py-8  text-white flex justify-center items-center w-full">
      <div>
        {isMobile ? (
          <div className="flex flex-col">
            <CrashGameContent />
            <CrashGameSidebar />
          </div>
        ) : (
          <div className="flex-row bg-center  text-white flex grow w-full min-w-[30rem] h-[41.6rem] border-b-3">
            <CrashGameSidebar />
            <CrashGameContent />
          </div>
        )}

        <div>
          <hr className="border-2 border-[#213743]"></hr>
          <GameFooter />
        </div>
      </div>
    </div>
  );
}

export default CrashGame;
