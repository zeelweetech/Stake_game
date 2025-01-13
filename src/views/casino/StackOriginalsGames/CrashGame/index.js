import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import CrashGameContent from "./CrashGameContent";
import CrashGameSidebar from "./CrashGameSidebar";
import { CrashSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";

function CrashGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    window.addEventListener("resize", handleResize);

    CrashSocket.connect();

    CrashSocket.on("connect", () => {});

    CrashSocket.on("disconnect", () => {});

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
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] md:py-10 py-5 text-white flex justify-center items-center md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3rem]">
        <div className=" w-full">
          <div
            className={`flex justify-center w-full  ${
              isMobile ? "h-[26rem]" : "h-[39rem]"
            } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-lg">
                <CrashGameSidebar />
              </div>
            )}
            <div className="flex-grow">
              <CrashGameContent />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <CrashGameSidebar />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem] xl:mt-11 lg:mt-11">
              <hr className="border-[#213743]" />
              <GameFooter />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <div className="xl:w-[71rem] lg:w-[58rem] md:w-[42rem] md:px-0 px-3 w-full">
              <GameContent />
              <GameTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrashGame;
