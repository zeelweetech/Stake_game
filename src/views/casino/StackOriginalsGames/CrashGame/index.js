import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import CrashGameContent from "./CrashGameContent";
import CrashGameSidebar from "./CrashGameSidebar";
// import { CrashSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { io } from "socket.io-client";

function CrashGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
  const { id } = useParams();
  const decoded = decodedToken();
  const crashGameSocket = io(process.env.REACT_APP_CRASH_URL, { path: "/ws" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    window.addEventListener("resize", handleResize);

    crashGameSocket.connect();

    // crashGameSocket.on("connect", () => { });

    crashGameSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    crashGameSocket.on("disconnect", () => { });

    crashGameSocket.on("connect_error", (error) => {
      console.error("Crash Connection Error:", error);
    });

    return () => {
      crashGameSocket.off("message");
      crashGameSocket.off("connect");
      crashGameSocket.off("disconnect");
      crashGameSocket.off("connect_error");
      crashGameSocket.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] md:py-10 py-5 text-white flex justify-center items-center md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3rem]">
        <div className=" w-full">
          <div
            className={`flex justify-center w-full  ${isMobile ? "h-[26rem]" : "h-[39rem]"
              } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-lg">
                <CrashGameSidebar crashGameSocket={crashGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <CrashGameContent crashGameSocket={crashGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <CrashGameSidebar crashGameSocket={crashGameSocket} />
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
